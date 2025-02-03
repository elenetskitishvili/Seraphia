import ProductsHeader from "@/src/components/products/ProductsHeader";
import PremiumCTA from "@/src/components/premium/PremiumCTA";
import ProductsPagination from "@/src/components/products/ProductsPagination";

import ProductsSkeleton from "@/src/components/products/ProductsSkeleton";
import { Suspense } from "react";
import ProductList from "@/src/components/products/ProductList";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: "asc" | "desc";
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";
  const sort = params?.sort || "asc";
  const page = Number(params?.page) || 1;
  const limit = 10;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products?search=${search}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`
  );

  const { products, total } = await res.json();

  return (
    <>
      <section className="px-6 770px:px-10 max-w-[1480px] mx-auto pb-[60px] 480px:pb-20 770px:pb-[120px] 990px:pb-[160px] dark:border-b dark:border-b-darkModeBorder">
        <ProductsHeader />
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductList params={params} />
        </Suspense>

        <ProductsPagination params={params} total={total} />
      </section>
      <PremiumCTA />
    </>
  );
}
