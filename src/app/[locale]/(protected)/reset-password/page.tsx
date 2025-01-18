import { resetPasswordAction } from "@/src/app/actions";
import { FormMessage, Message } from "@/src/app/components/form-message";
import { SubmitButton } from "@/src/app/components/submit-button";
import { Input } from "@/src/app/components/ui/input";
import { Label } from "@/src/app/components/ui/label";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
        <input type="hidden" name="locale" value={locale} />
        <h1 className="text-4xl font-medium">Reset password</h1>
        <p className="text-xl text-foreground/60">
          Please enter your new password below.
        </p>
        <Label htmlFor="password" className="text-xl">
          New password
        </Label>
        <Input
          type="password"
          name="password"
          placeholder="New password"
          required
        />
        <Label htmlFor="confirmPassword" className="text-xl">
          Confirm password
        </Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
        />
        <SubmitButton formAction={resetPasswordAction}>
          Reset password
        </SubmitButton>
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}
