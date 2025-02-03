import BlogCard from "@/src/components/blogs/BlogCard";
import BlogList from "@/src/components/blogs/BlogList";
import BlogSearch from "@/src/components/blogs/BlogSearch";
import PremiumCTA from "@/src/components/premium/PremiumCTA";
import ProductsPagination from "@/src/components/products/ProductsPagination";
import ProductsSkeleton from "@/src/components/products/ProductsSkeleton";
import { Suspense } from "react";

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    sort?: "asc" | "desc";
    page?: string;
  }>;
}) {
  const params = await searchParams;
  console.log("params🔮", params);

  const search = params?.search || "";
  const sort = params?.sort || "asc";
  const page = Number(params?.page) || 1;
  const limit = 10;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs?search=${search}&sort=${sort}&page=${page}&limit=${limit}`
  );

  const { blogs, total } = await res.json();

  return (
    <>
      <section>
        {/* SECTION HEADING */}
        <div className="bg-bgLight dark:bg-gradient-to-b dark:from-darkModeBgLighter dark:to-indigo-900 text-center pt-[100px] pb-20 480px:py-[240px] 770px:py-[230px] 990px:py-[210px] px-6">
          <h1 className="text-[40px] 480px:text-[56px] 770px:text-[64px] 990px:text-[112px]  font-bold leading-none -tracking-[2px] 990px:-tracking-[5px] mb-6 770px:mb-10">
            Shopverse Blog
          </h1>
          <p className="text-lg 480px:text-xl text-customGray dark:text-indigo-500 font-semibold tracking-tight">
            Your best source of fashion tips and trends.
          </p>
        </div>

        <div className="py-8 px-6 border-b border-bgBtn dark:border-darkModeBorder ">
          <BlogSearch />
        </div>

        <Suspense fallback={<ProductsSkeleton />}>
          <BlogList params={params} />
        </Suspense>

        <ProductsPagination params={params} total={total} />
      </section>
      <PremiumCTA />
    </>
  );
}
