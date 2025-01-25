import ProductsHeader from "@/src/components/products/ProductsHeader";
import ProductCard from "@/src/components/products/ProductCard";
import PremiumCTA from "@/src/components/premium/PremiumCTA";

export default async function Products() {
  return (
    <>
      <section className="px-6 770px:px-10 max-w-[1480px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-[160px]">
        <ProductsHeader />

        {/* PRODUCTS LIST */}
        <div className="grid grid-cols-2 990px:grid-cols-4 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <PremiumCTA />
    </>
  );
}
