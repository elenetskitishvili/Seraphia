import DeleteProduct from "@/src/components/account/DeleteProduct";
import { Link } from "@/src/i18n/routing";
import { fetchUserProducts } from "@/src/lib/data-service";
import { Product } from "@/src/types/types";
import { createClient } from "@/src/utils/supabase/server";
import { PencilIcon } from "@heroicons/react/24/outline";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function MyListings() {
  const supabase = await createClient();
  const locale = await getLocale();
  const t = await getTranslations("Listing");

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;

  if (!userId) throw new Error("User not authenticated.");

  const products: Product[] = await fetchUserProducts(userId);

  return (
    <div className="p-4 770px:px-10 770px:pt-6 990px:pt-20 990px:pl-0 990px:pr-10">
      <h1
        className={`text-2xl 990px:text-4xl   pb-1 ${
          locale === "en" ? "tracking-tighter font-bold" : ""
        }`}
      >
        {t("heading")}
      </h1>
      {products.length === 0 ? (
        <div className="h-[50vh] 990px:h-[80vh] px-6 flex flex-col items-center justify-center text-center font-bold text-customGray">
          <h2
            className={`text-[32px]  770px:text-[64px] 990px:text-[80px]  mb-5 770px:mb-10 ${
              locale === "en"
                ? "-tracking-[2px] 480px:-tracking-[3px] 770px:-tracking-[4px] 480px:text-5xl"
                : "min-[520px]:text-5xl"
            }`}
          >
            {t("no-listings")}
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
            href={"/add-product"}
            className={`w-full 480px:w-auto text-base text-white bg-customBlue dark:bg-indigo-600 rounded-full py-3 px-[50px] inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              locale === "en" ? "tracking-tighter" : "tracking-wide"
            }`}
          >
            {t("cta-btn")}
          </Link>
        </div>
      ) : (
        // PRODUCTS LIST
        <ul className="grid grid-cols-2 770px:grid-cols-3 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
          {products.map((product) => (
            <li key={product.id} className="flex flex-col">
              <Link href={`/products/${product.id}`} className=" flex flex-col">
                {product.images[0] && (
                  <Image
                    src={product.images?.[0]}
                    width={390}
                    height={390}
                    alt={product.name_en}
                    className="aspect-square w-full object-cover dark:rounded-lg dark:brightness-[80%]"
                  />
                )}
                <h2
                  className={`text-lg mb-1 mt-2 leading-6 font-semibold  ${
                    locale === "en" ? "tracking-tighter" : ""
                  }`}
                >
                  {locale === "en" ? product.name_en : product.name_ka}
                </h2>
              </Link>
              <div className="flex flex-col 480px:flex-row  gap-3 mt-3">
                <Link
                  href={`/edit-product/${product.id}`}
                  className="py-2 px-3 border border-blue-200 dark:border-darkModeBorder dark:bg-darkModeBorder rounded-sm flex gap-2 items-center justify-center text-customBlue dark:text-indigo-400"
                >
                  <PencilIcon className="w-5 h-5" /> <span>{t("modify")}</span>
                </Link>
                <DeleteProduct productId={product.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
