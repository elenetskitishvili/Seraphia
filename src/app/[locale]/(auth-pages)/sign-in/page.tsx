import { signInWithGithubAction } from "@/src/app/actions/authActions";
import SignInForm from "@/src/components/auth/SignInForm";
import { getLocale } from "next-intl/server";

export default async function Login() {
  const locale = await getLocale();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="">
        <SignInForm />

        {/* GITHUB */}
        <form
          action={signInWithGithubAction}
          className="mt-20 flex items-center justify-center gap-1 border-grey-300 border-2 p-2 rounded hover:border-gray-700 transition-colors dark:border-gray-500 dark:hover:border-white"
        >
          <input type="hidden" name="locale" value={locale} />
          <button>Sign in with GitHub</button>
        </form>
      </div>
    </div>
  );
}
