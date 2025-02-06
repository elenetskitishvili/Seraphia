"use server";

import { createClient } from "@/src/utils/supabase/server";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getLocale } from "next-intl/server";

export async function editBlog(formData: FormData) {
  const supabase = await createClient();
  const locale = await getLocale();

  // Extract form values
  const blogId = formData.get("id") as string;
  const headingEn = formData.get("headingEn") as string;
  const headingKa = formData.get("headingKa") as string;
  const contentEn = formData.get("contentEn") as string;
  const contentKa = formData.get("contentKa") as string;
  const image = formData.get("image") as File | string;

  let imageUrl = typeof image === "string" ? image : null;

  try {
    if (image instanceof File && image.size > 0) {
      const filePath = `blogs/${randomUUID()}-${(image as File).name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, image, {
          contentType: image instanceof File ? image.type : undefined,
          upsert: false,
        });

      if (uploadError) throw new Error("Failed to upload image to Supabase.");

      imageUrl = supabase.storage.from("blog-images").getPublicUrl(filePath)
        .data.publicUrl;
    }
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
      .update({
        heading_en: headingEn,
        heading_ka: headingKa,
        content_en: contentEn,
        content_ka: contentKa,
        user_id: userId,
        image: imageUrl,
      })
      .eq("id", blogId)
      .eq("user_id", userId);

    if (error) {
      throw new Error("Failed to edit blog in Supabase.");
    }

    revalidatePath(`/${locale}/blogs/${blogId}`);

    return data;
  } catch (error) {
    console.error("Error editing product in Supabase:", error);

    throw error;
  }
}
