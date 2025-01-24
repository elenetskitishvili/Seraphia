"use server";

import { createClient } from "@/src/utils/supabase/server";

export async function sendMessage(formData: FormData) {
  await new Promise((reject) => setTimeout(reject, 3000)); // Simulates a delay
  console.log("message is sent 🤩");
  return { success: true };
}
