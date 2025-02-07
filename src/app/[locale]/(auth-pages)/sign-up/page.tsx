import SignUpForm from "@/src/components/auth/SignUpForm";
import { FormMessage, Message } from "@/src/components/form-message";

export const metadata = {
  title: "Sign up",
};

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <SignUpForm />
      <div className="text-center max-w-96">
        <FormMessage message={searchParams} />
      </div>
    </div>
  );
}
