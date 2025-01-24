"use client";

import { z } from "zod";
import { sendMessage } from "@/src/app/actions/sendMessage";
import { useState } from "react";

interface ErrorMessages {
  name?: string | string[];
  email?: string | string[];
  subject?: string | string[];
  message?: string | string[];
}

const contactSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .refine((val) => val !== "", { message: "Please select a subject" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: (formData.get("subject") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      setErrorMessage({ name: "", email: "", subject: "", message: "" });
      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = contactSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      await sendMessage(formData);
      setSuccess("Message was sent successfully");
      form.reset();
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors.map((e) => e.message).join(", "));
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderButtonText = () => {
    if (loading) return "Sending...";
    if (success)
      return (
        <>
          <span className="mr-1">Send another</span>
          <i className="fas fa-arrow-right"></i>
        </>
      );
    if (error) return "Retry";
    return (
      <>
        <span className="mr-1">Send message</span>
        <i className="fas fa-arrow-right"></i>
      </>
    );
  };

  return (
    <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
      <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
        <p className="text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px]">
          The support team is active everyday from 8am to 8pm, so you can always
          email or call us.
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="name"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue=""
              placeholder="Enter your name"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>

          {errorMessage?.name && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.name)
                ? errorMessage.name.join(", ")
                : errorMessage.name}
            </div>
          )}
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="email"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue=""
              placeholder="Enter your email"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>

          {errorMessage?.email && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.email)
                ? errorMessage.email.join(", ")
                : errorMessage.email}
            </div>
          )}
          {/* SUBJECT */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="subject"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              defaultValue=""
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="information_request">Information request</option>
              <option value="shipping_refund">Shipping or refund</option>
              <option value="premium_membership">Premium membership</option>
              <option value="other">other</option>
            </select>
          </div>

          {errorMessage?.subject && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.subject)
                ? errorMessage.subject.join(", ")
                : errorMessage.subject}
            </div>
          )}

          {/* MESSAGE */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="message"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              defaultValue=""
              placeholder="Enter a message"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
            />
          </div>

          {errorMessage?.message && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.message)
                ? errorMessage.message.join(", ")
                : errorMessage.message}
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className={`w-full 480px:w-auto 480px:px-[50px]    text-customBlue bg-bgMedium font-medium py-3  rounded-full inline-block hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end ${
              loading ? " cursor-not-allowed" : ""
            }`}
          >
            {renderButtonText()}
          </button>
        </form>
      </div>
    </section>
  );
}
