import UpdateProfileForm from "@/src/components/account/UpdateProfileForm";
import { fetchUserProfile } from "@/src/lib/data-service";
import { createClient } from "@/src/utils/supabase/server";
import { User } from "@/src/types/types";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Profile() {
  const t = await getTranslations("Profile");
  const locale = await getLocale();
  const supabase = await createClient();

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;
  const userEmail = userResponse.data.user?.email;
  if (!userId) throw new Error("User not authenticated.");
  const user: User = await fetchUserProfile(userId);

  return (
    <section className="">
      <div className="pt-10 990px:pt-[90px] pb-10 480px:pb-20 770px:pb-[120px] max-w-[1100px] 990px:grid 990px:grid-cols-2 ">
        <div className="flex flex-col gap-4 px-6 770px:px-10 990px:pl-3 min-[1200px]:px-6 pb-4 990px:order-2">
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("email")}
            </label>
            <input
              type="email"
              disabled
              value={userEmail}
              className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 "
            />
          </div>

          {/* SUBSCRIPTION PLAN */}
          <div className="flex flex-col gap-[5px]">
            <label
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6  ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("plan")}
            </label>
            <input
              type="text"
              disabled
              value={user?.subscription_plan || "No subscription"}
              className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 "
            />
          </div>

          {/* SUBSCRIPTION EXPIRY */}
          <div className="flex flex-col gap-[5px]">
            <label
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6  ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("expiry")}
            </label>
            <input
              type="date"
              disabled
              value={
                user?.expires_at
                  ? new Date(user.expires_at).toISOString().split("T")[0]
                  : ""
              }
              className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 "
            />
          </div>

          {/* MAX ITEMS */}
          <div className="flex flex-col gap-[5px]">
            <label
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6  ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("max-items")}
            </label>
            <input
              type="number"
              disabled
              value={user?.max_items || 0}
              className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 "
            />
          </div>
        </div>
        <UpdateProfileForm
          fullName={user?.full_name}
          phone={user?.phone}
          makesJewelry={user?.makes_jewelry}
          address={user?.address}
          userId={userId}
        />
      </div>
    </section>
  );
}
