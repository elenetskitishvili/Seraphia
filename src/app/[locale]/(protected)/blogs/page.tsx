import BlogCard from "@/src/app/components/blogs/BlogCard";
import BlogSearch from "@/src/app/components/blogs/BlogSearch";
import PremiumCTA from "@/src/app/components/premium/PremiumCTA";

export default async function Blogs() {
  return (
    <>
      <section>
        {/* SECTION HEADING */}
        <div className="bg-bgLight text-center pt-[100px] pb-20 480px:py-[240px] 770px:py-[230px] 990px:py-[210px] px-6">
          <h1 className="text-[40px] 480px:text-[56px] 770px:text-[64px] 990px:text-[112px]  font-bold leading-none -tracking-[2px] 990px:-tracking-[5px] mb-6 770px:mb-10">
            Shopverse Blog
          </h1>
          <p className="text-lg 480px:text-xl text-customGray font-semibold tracking-tight">
            Your best source of fashion tips and trends.
          </p>
        </div>

        <div className="py-8 px-6 border-b border-bgBtn ">
          <BlogSearch />
        </div>

        {/* BLOGS LIST */}
        <div className="grid grid-cols-1 480px:grid-cols-2 990px:grid-cols-3 480px:gap-x-6 gap-y-6 480px:gap-y-10 px-6 770px:px-10 py-[60px] 770px:py-20 990px:py-[120px] ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      {/* <PremiumCTA /> */}
    </>
  );
}
