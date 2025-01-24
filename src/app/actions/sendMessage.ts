"use server";

import { createClient } from "@/src/utils/supabase/server";
import { sendEmail } from "@/src/utils/email";

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

    await sendEmail(
      email,
      `We received your message: ${subject}`,
      `<p>Hi ${name},</p>
       <p>Thank you for reaching out. We received your message:</p>
       <blockquote>${message}</blockquote>
       <p>Our team will get back to you soon.</p>
       <p>Best regards,<br/>Your Support Team</p>`
    );

    return { success: true, message: "Message sent successfully." };
  } catch (err) {
    console.error("Unexpected Error:", err);
    throw new Error("An unexpected error occurred.");
  }
}
