import ProductCard from "@/src/components/products/ProductCard";
import { Product } from "@/src/types/types";

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
  const search = params?.search || "";
  const category = params?.category || "";
  const sort = params?.sort || "asc";
  const page = Number(params?.page) || 1;
  const limit = 2;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products?search=${search}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`
  );

  const { products, total } = await res.json();
  return (
    <ul className="grid grid-cols-2 990px:grid-cols-4 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
