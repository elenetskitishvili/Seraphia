import type { Stripe } from "stripe";
import { createClient } from "@/src/utils/supabase/server";
import { stripe } from "@/src/lib/stripe";
import { Link } from "@/src/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ResultPremium(props: {
  searchParams: Promise<{ session_id: string }>;
}): Promise<JSX.Element> {
  const supabase = await createClient();
  const t = await getTranslations("Pricing");
  const locale = await getLocale();

  const searchParams = await props.searchParams;
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;
  if (!userId) throw new Error("User not authenticated.");

  // Update subscription in Supabase
  const { error } = await supabase
    .from("users")
    .update({
      subscription_plan: "exclusive",
      max_items: null,
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    })
    .eq("user_id", userId);

  if (error) throw new Error("Failed to update subscription: " + error.message);

  return (
    <div className="h-screen px-6 flex flex-col items-center justify-center  bg-bgLight dark:bg-darkModeBorder  tracking-tighter text-center font-bold">
      <h2
        className={`text-[32px]  770px:text-[64px] 990px:text-[80px]  mb-5 770px:mb-10 dark:text-darkModeText ${
          locale === "en"
            ? "-tracking-[2px] 480px:-tracking-[3px] 770px:-tracking-[4px] 480px:text-5xl"
            : "min-[520px]:text-5xl"
        }`}
      >
        {t("exclusive-title")}
      </h2>
      <p
        className={`text-lg text-customGray dark:text-darkModeText mb-6 770px:mb-10   ${
          locale === "en"
            ? "tracking-tighter leading-tight max-w-[400px]"
            : "tracking-wide"
        }`}
      >
        {t("exclusive-description")}
      </p>
      <Link
        href={"/account/profile"}
        className={`w-full 480px:w-auto text-base text-white bg-customBlue dark:bg-indigo-600 rounded-full py-3 px-[50px] inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          locale === "en" ? "tracking-tighter" : "tracking-wide"
        }`}
      >
        {t("exclusive-button")}
      </Link>
    </div>
  );
}
