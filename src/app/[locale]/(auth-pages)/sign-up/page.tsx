import { signUpAction } from "@/src/app/actions/authActions";
import SignUpForm from "@/src/components/auth/SignUpForm";
import { FormMessage, Message } from "@/src/components/form-message";
import { SubmitButton } from "@/src/components/submit-button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;

  if ("message" in searchParams) {
    return (
      <div className="max-w-96 mx-auto  text-lg text-center text-bold mt-3">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignUpForm />
    </div>
  );
}
