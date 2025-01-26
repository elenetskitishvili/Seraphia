import ProductsHeader from "@/src/components/products/ProductsHeader";
import ProductCard from "@/src/components/products/ProductCard";
import PremiumCTA from "@/src/components/premium/PremiumCTA";
import ProductsPagination from "@/src/components/products/ProductsPagination";
import { Product } from "@/src/types/types";

export default async function Products({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";
  const sort = params?.sort || "asc";
  const page = Number(params?.page) || 1;
  const limit = 10;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products?search=${search}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  const { products, total } = await res.json();

  return (
    <>
      <section className="px-6 770px:px-10 max-w-[1480px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-[160px]">
        <ProductsHeader />

        {/* PRODUCTS LIST */}
        <div className="grid grid-cols-2 990px:grid-cols-4 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* PAGINATION */}
        <ProductsPagination />
      </section>
      <PremiumCTA />
    </>
  );
}
