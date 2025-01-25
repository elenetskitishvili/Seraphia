"use server";

import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";
import { randomUUID } from "crypto";

export async function addProduct(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = await createClient();

  // GET DATA
  const nameEn = formData.get("nameEn") as string;
  const nameKa = formData.get("nameKa") as string;
  const price = Number(formData.get("price")) * 100;
  const descriptionEn = formData.get("descriptionEn") as string;
  const descriptionKa = formData.get("descriptionKa") as string;
  const category = formData.get("category") as string;
  const images = formData.getAll("images") as File[];

  if (!nameEn || !price || !descriptionEn || !category || images.length === 0) {
    throw new Error("Missing required product details.");
  }

  let stripeProduct = null;
  let stripePrice = null;
  let uploadedImageUrls: string[] = [];

  try {
    // UPLOAD IMAGES TO SUPABASE BUCKET
    uploadedImageUrls = await Promise.all(
      images.map(async (image) => {
        const filePath = `products/${randomUUID()}-${image.name}`;

        const { data, error } = await supabase.storage
          .from("product-images")
          .upload(filePath, image, {
            contentType: image.type,
            upsert: false,
          });

        if (error) {
          console.error("Image Upload Error:", error);
          throw new Error("Failed to upload image.");
        }

        return supabase.storage.from("product-images").getPublicUrl(filePath)
          .data.publicUrl;
      })
    );

    // CREATE PRODUCT ON STRIPE
    stripeProduct = await stripe.products.create({
      name: nameEn,
      description: descriptionEn,
      images: uploadedImageUrls.length > 0 ? [uploadedImageUrls[0]] : [],
    });

    stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price,
      currency: "usd",
    });
  } catch (error) {
    console.error("Error during product setup:", error);
    if (stripeProduct) await stripe.products.del(stripeProduct.id);
    throw error;
  }

  // CREATE PRODUCT ON SUPABASE
  try {
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;
    if (!userId) throw new Error("User not authenticated.");

    const { data, error } = await supabase
      .from("products")
      .insert({
        name_en: nameEn,
        name_ka: nameKa,
        price,
        category,
        description_en: descriptionEn,
        description_ka: descriptionKa,
        user_id: userId,
        stripe_product_id: stripeProduct.id,
        stripe_price_id: stripePrice.id,
        images: uploadedImageUrls,
      })
      .single();

    if (error) throw new Error("Failed to create product in Supabase.");

    return data;
  } catch (error) {
    console.error("Error creating product in Supabase:", error);
    if (stripeProduct) await stripe.products.del(stripeProduct.id);
    throw error;
  }
}
