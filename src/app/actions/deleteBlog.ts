"use server";

import { createClient } from "@/src/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteBlog(blogId: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("blogs").delete().eq("id", blogId);

  if (error) throw new Error(error.message);
  revalidatePath("/my-blogs");
}
