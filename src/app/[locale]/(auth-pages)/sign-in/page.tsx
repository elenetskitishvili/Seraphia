import { signInAction, signInWithGithubAction } from "@/src/app/actions";
import { FormMessage, Message } from "@/src/app/components/form-message";
import { SubmitButton } from "@/src/app/components/submit-button";
import { Input } from "@/src/app/components/ui/input";
import { Label } from "@/src/app/components/ui/label";
import Link from "next/link";

export default async function Login(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="">
        <form className="flex-1 flex flex-col min-w-[300px]">
          <input type="hidden" name="locale" value={locale} />
          <h1 className="text-4xl font-medium">Sign in</h1>
          <p className="text-xl text-foreground mt-1">
            Don&apos;t have an account?
            <Link
              className="text-foreground font-medium underline"
              href={`/${locale}/sign-up`}
              data-cy="sign-up-link"
            >
              Sign up
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
              data-cy="email-input"
            />
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-xl">
                Password
              </Label>
              <Link
                className="text-lg text-foreground underline"
                href={`/${locale}/forgot-password`}
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              required
              data-cy="password-input"
            />
            <SubmitButton
              pendingText="Signing In..."
              formAction={signInAction}
              className="text-2xl"
              data-cy="sign-in-button"
            >
              Sign in
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
        <form
          action={signInWithGithubAction}
          className="flex items-center justify-center gap-1 border-grey-300 border-2 p-2 rounded hover:border-gray-700 transition-colors dark:border-gray-500 dark:hover:border-white"
        >
          <input type="hidden" name="locale" value={locale} />
          <button>Sign in with GitHub</button>
        </form>
      </div>
    </div>
  );
}
