"use server";

import { createClient } from "@/src/utils/supabase/server";
import { sendEmail } from "@/src/utils/email";
import { getLocale } from "next-intl/server";

export async function sendMessage(formData: FormData) {
  const supabase = await createClient();
  const locale = await getLocale();

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    throw new Error("All fields are required.");
  }

  try {
    // Insert message into Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, subject, message });

    if (error) {
      throw new Error("Failed to store message in database.");
    }

    // Define email content based on locale
    const emailSubject =
      locale === "ka"
        ? `ჩვენ მივიღეთ თქვენი შეტყობინება: ${subject}`
        : `We received your message: ${subject}`;

    const emailBody =
      locale === "ka"
        ? `<p>გამარჯობა ${name},</p>
           <p>გმადლობთ, რომ დაგვიკავშირდით. ჩვენ მივიღეთ თქვენი შეტყობინება:</p>
           <blockquote>${message}</blockquote>
           <p>ჩვენი გუნდი მალე დაგიკავშირდებათ.</p>
           <p>საუკეთესო სურვილებით,<br/> მხარდაჭერის გუნდი</p>`
        : `<p>Hi ${name},</p>
           <p>Thank you for reaching out. We received your message:</p>
           <blockquote>${message}</blockquote>
           <p>Our team will get back to you soon.</p>
           <p>Best regards,<br/>Your Support Team</p>`;

    // Send email
    await sendEmail(email, emailSubject, emailBody);

    return { success: true, message: "Message sent successfully." };
  } catch (err) {
    console.error("Unexpected Error:", err);
    throw new Error("An unexpected error occurred.");
  }
}
