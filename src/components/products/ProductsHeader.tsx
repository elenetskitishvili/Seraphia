import { getLocale, getTranslations } from "next-intl/server";
import ProductFilters from "./ProductFilters";
import ProductSearch from "./ProductSearch";

export default async function ProductsHeader() {
  const t = await getTranslations("ProductDetails");
  const locale = await getLocale();
  return (
    <section className="pt-[120px] 990px:pt-40 text-center">
      <h1
        className={`text-[32px] 480px:text-4xl 770px:text-5xl  990px:text-[64px]  font-bold leading-none  mb-6 480px:mb-9 770px:mb-10 ${
          locale === "en" ? "tracking-tighter" : ""
        }`}
      >
        {t("collection")}
      </h1>
      <ProductFilters />
      <ProductSearch />
    </section>
  );
}
