import ProductCard from "@/src/components/products/ProductCard";
import { Product } from "@/src/types/types";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ProductList({
  params,
}: {
  params: {
    search?: string;
    category?: string;
    sort?: "asc" | "desc";
    page?: string;
  };
}) {
  const locale = await getLocale();
  const t = await getTranslations("ProductDetails");
  const search = params?.search || "";
  const category = params?.category || "";
  const sort = params?.sort || "asc";
  const page = Number(params?.page) || 1;
  const limit = 12;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products?search=${search}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`
  );

  const { products, total } = await res.json();
  return (
    <div className="my-14">
      {products.length > 0 ? (
        <ul className="grid grid-cols-2 990px:grid-cols-4 gap-x-6 990px:gap-x-10 gap-y-10">
          {products.reverse().map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p
          className={`text-[24px] text-center my-[160px] ${
            locale === "en" ? "tracking-tighter " : ""
          }`}
        >
          {t("no-product")}
        </p>
      )}
    </div>
  );
}
