import ProductsHeader from "@/src/components/products/ProductsHeader";
import PremiumCTA from "@/src/components/premium/PremiumCTA";
import ProductsPagination from "@/src/components/products/ProductsPagination";

import ProductsSkeleton from "@/src/components/products/ProductsSkeleton";
import { Suspense } from "react";
import ProductList from "@/src/components/products/ProductList";

export default async function Products({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = await searchParams;
  return (
    <>
      <section className="px-6 770px:px-10 max-w-[1480px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-[160px]">
        <ProductsHeader />
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductList params={params} />
        </Suspense>

        <ProductsPagination />
      </section>
      <PremiumCTA />
    </>
  );
}
