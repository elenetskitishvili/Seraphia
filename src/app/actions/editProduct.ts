"use server";

import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { getLocale } from "next-intl/server";

export async function editProduct(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = await createClient();
  const locale = await getLocale();

  const productId = formData.get("productId") as string;
  const nameEn = formData.get("nameEn") as string;
  const nameKa = formData.get("nameKa") as string;
  const price = Number(formData.get("price")) * 100;
  const descriptionEn = formData.get("descriptionEn") as string;
  const descriptionKa = formData.get("descriptionKa") as string;
  const category = formData.get("category") as string;
  const existingImages = formData.getAll("existingImages") as string[];
  const newImages = formData.getAll("images") as File[];

  if (!productId || !nameEn || !price || !descriptionEn || !category) {
    throw new Error("Missing required product details.");
  }

  // Upload new images
  let uploadedImageUrls: string[] = [];
  if (newImages.length > 0) {
    uploadedImageUrls = await Promise.all(
      newImages.map(async (image) => {
        const filePath = `products/${crypto.randomUUID()}-${image.name}`;
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
  }

  const allImages = [...existingImages, ...uploadedImageUrls];

  try {
    // FETCH EXISTING PRODUCT
    const { data: product, error: productError } = await supabase
      .from("products")
      .select("stripe_product_id, stripe_price_id")
      .eq("id", productId)
      .single();

    if (productError || !product) {
      throw new Error("Product not found.");
    }

    // UPDATE STRIPE PRODUCT
    await stripe.products.update(product.stripe_product_id, {
      name: nameEn,
      description: descriptionEn,
      images: allImages.length > 0 ? [allImages[0]] : [],
    });

    await stripe.prices.create({
      product: product.stripe_product_id,
      unit_amount: price,
      currency: "usd",
    });

    // UPDATE PRODUCT IN SUPABASE
    const { error } = await supabase
      .from("products")
      .update({
        name_en: nameEn,
        name_ka: nameKa,
        price,
        category,
        description_en: descriptionEn,
        description_ka: descriptionKa,
        images: allImages,
      })
      .eq("id", productId);

    if (error) {
      throw new Error("Failed to update product in Supabase.");
    }

    revalidatePath(`/${locale}/products/${productId}`);

    return { success: true };
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
