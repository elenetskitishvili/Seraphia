"use server";

import { createClient } from "@/src/utils/supabase/server";

export async function sendMessage(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
      })
      .single();

    if (error) {
      throw new Error("Failed to send message.");
    }
  } catch (err) {
    console.error("Unexpected Error:", err);
    throw new Error("An unexpected error occurred.");
  }
}
