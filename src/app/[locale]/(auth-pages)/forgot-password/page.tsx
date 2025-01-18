import { forgotPasswordAction } from "@/src/app/actions";
import { FormMessage, Message } from "@/src/app/components/form-message";
import { SubmitButton } from "@/src/app/components/submit-button";
import { Input } from "@/src/app/components/ui/input";
import { Label } from "@/src/app/components/ui/label";
import Link from "next/link";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="">
        <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-[300px] max-w-[300px] mx-auto">
          <input type="hidden" name="locale" value={locale} />
          <div>
            <h1 className="text-4xl font-medium">Reset Password</h1>
            <p className="text-xl text-secondary-foreground">
              Already have an account?{" "}
              <Link
                className="text-primary underline"
                href={`/${locale}/sign-in`}
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email" className="text-xl">
              Email
            </Label>
            <Input name="email" placeholder="you@example.com" required />
            <SubmitButton
              formAction={forgotPasswordAction}
              className="text-2xl"
            >
              Reset Password
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </div>
  );
}
