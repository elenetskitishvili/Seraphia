import ProductsHeader from "@/src/app/components/products/ProductsHeader";
import ProductCard from "@/src/app/components/products/productCard";

export default async function Products() {
  return (
    <section className="px-6 770px:px-10 max-w-[1480px] mx-auto">
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
  );
}
