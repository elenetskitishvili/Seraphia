import { signUpAction } from "@/src/app/actions";
import { FormMessage, Message } from "@/src/app/components/form-message";
import { SubmitButton } from "@/src/app/components/submit-button";
import { Input } from "@/src/app/components/ui/input";
import { Label } from "@/src/app/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="">
        <form className="flex flex-col min-w-[300px] max-w-[300px] mx-auto">
          <input type="hidden" name="locale" value={locale} />
          <h1 className="text-4xl font-medium">Sign up</h1>
          <p className="text-xl text text-foreground mt-1">
            Already have an account?{" "}
            <Link
              className="text-primary font-medium underline"
              href={`/${locale}/sign-in`}
            >
              Sign in
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email" className="text-xl">
              Email
            </Label>
            <Input
              name="email"
              placeholder="you@example.com"
              required
              data-cy="signup-email-input"
            />
            <Label htmlFor="password" className="text-xl">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={6}
              required
              data-cy="signup-password-input"
            />
            <SubmitButton
              formAction={signUpAction}
              pendingText="Signing up..."
              className="text-2xl"
              data-cy="sign-up-button"
            >
              Sign up
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </div>
  );
}
