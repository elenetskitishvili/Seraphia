import { signInWithGithubAction } from "@/src/app/actions/authActions";
import { FormMessage, Message } from "@/src/components/form-message";
import SignInForm from "@/src/components/auth/SignInForm";
import { getLocale } from "next-intl/server";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  const locale = await getLocale();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="">
        <SignInForm />
        <div className="dark:text-indigo-400 text-lg text-center text-bold min-[520px]:mt-3">
          <FormMessage message={searchParams} />
        </div>

        {/* GITHUB */}
        <form action={signInWithGithubAction}>
          <button className="w-full mt-20 flex items-center justify-center gap-3 dark:text-white bg-bgMedium dark:bg-darkModeBorder font-medium py-[10px]  rounded-full hover:bg-bgDark dark:hover:bg-darkModeBgLighter transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
            <span className="text-2xl">
              <i className="fab fa-github"></i>
            </span>
            <span>Sign in with GitHub</span>
          </button>
        </form>
      </div>
    </div>
  );
}
