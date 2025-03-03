import OrdersList from "@/src/components/account/OrdersList";
import { Link } from "@/src/i18n/routing";
import { fetchOrders } from "@/src/lib/data-service";
import { OrderWithItems } from "@/src/types/types";
import { createClient } from "@/src/utils/supabase/server";
import { getLocale, getTranslations } from "next-intl/server";

export const metadata = {
  title: "Orders",
};

export default async function Orders() {
  const supabase = await createClient();
  const locale = await getLocale();
  const t = await getTranslations("Order");

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;

  if (!userId) throw new Error("User not authenticated.");

  const orders: OrderWithItems[] = await fetchOrders(userId);

  return (
    <section className=" p-4 770px:px-10 770px:pt-6 990px:pt-20 990px:pl-0 990px:pr-10">
      <h1 className="text-2xl 990px:text-4xl font-bold tracking-tighter pb-1">
        {t("your-orders")}
      </h1>
      {orders.length === 0 ? (
        <div className="h-[50vh] 990px:h-[80vh] px-6 flex flex-col items-center justify-center tracking-tighter text-center font-bold text-customGray">
          <h2
            className={`text-[32px]  770px:text-[64px] 990px:text-[80px]  mb-5 770px:mb-10 ${
              locale === "en"
                ? "-tracking-[2px] 480px:-tracking-[3px] 770px:-tracking-[4px] 480px:text-5xl"
                : "min-[520px]:text-5xl"
            }`}
          >
            {t("no-orders")}
          </h2>
          <p
            className={`text-lg text-customGray mb-6 770px:mb-10   ${
              locale === "en"
                ? "tracking-tighter leading-tight max-w-[400px]"
                : "tracking-wide"
            }`}
          >
            {t("cta-text")}
          </p>
          <Link
            href={"/products"}
            className={`w-full 480px:w-auto text-base text-white bg-customBlue dark:bg-indigo-600 rounded-full py-3 px-[50px] inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              locale === "en" ? "tracking-tighter" : "tracking-wide"
            }`}
          >
            {t("shop-now")}
          </Link>
        </div>
      ) : (
        <OrdersList orders={orders} />
      )}
    </section>
  );
}
