"use server";

import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { getLocale } from "next-intl/server";

export async function editBlog(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = await createClient();
  const locale = await getLocale();

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;

  if (!userId) throw new Error("User not authenticated.");

  const blogId = formData.get("id") as string;
  const headingEn = formData.get("headingEn") as string;
  const headingKa = formData.get("headingKa") as string;
  const contentEn = formData.get("contentEn") as string;
  const contentKa = formData.get("contentKa") as string;
  const imageFile = formData.get("image") as File | string;

  let imageUrl = typeof imageFile === "string" ? imageFile : null;

  if (imageFile instanceof File) {
    const { data, error } = await supabase.storage
      .from("blogs")
      .upload(`blog-${blogId}-${Date.now()}`, imageFile, { upsert: true });

    if (error) throw new Error("Failed to upload image");
    imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blogs/${data.path}`;
  }

  const { error: updateError } = await supabase
    .from("blogs")
    .update({
      heading_en: headingEn,
      heading_ka: headingKa,
      content_en: contentEn,
      content_ka: contentKa,
      image: imageUrl,
    })
    .eq("id", blogId)
    .eq("user_id", userId);

  if (updateError) throw new Error("Failed to update blog");

  revalidatePath(`/${locale}/blog/${blogId}`);

  return { success: true, message: "Blog updated successfully" };
}
