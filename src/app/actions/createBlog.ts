"use server";

import { createClient } from "@/src/utils/supabase/server";
import { randomUUID } from "crypto";

export async function createBlog(formData: FormData) {
  const supabase = await createClient();

  const headingEn = formData.get("headingEn") as string;
  const headingKa = formData.get("headingKa") as string;
  const contentEn = formData.get("contentEn") as string;
  const contentKa = formData.get("contentKa") as string;
  const image = formData.get("image") as File;
  let imageUrl: string | null = null;

  try {
    const filePath = `blogs/${randomUUID()}-${image.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filePath, image, {
        contentType: image.type,
        upsert: false,
      });

    if (uploadError) throw new Error("Failed to upload image to Supabase.");

    imageUrl = supabase.storage.from("blog-images").getPublicUrl(filePath)
      .data.publicUrl;
  } catch (error) {
    console.error("Error uploading image in Supabase:", error);
    throw error;
  }

  try {
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;

    if (!userId) throw new Error("User not authenticated.");

    const { data, error } = await supabase
      .from("blogs")
      .insert({
        heading_en: headingEn,
        heading_ka: headingKa,
        content_en: contentEn,
        content_ka: contentKa,
        user_id: userId,
        image: imageUrl || null,
      })
      .single();

    if (error) {
      throw new Error("Failed to create blog in Supabase.");
    }

    return data;
  } catch (error) {
    console.error("Error creating product in Supabase:", error);

    throw error;
  }
}
