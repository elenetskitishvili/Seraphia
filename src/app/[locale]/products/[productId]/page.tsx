import ProductInfo from "@/src/components/products/ProductInfo";
import { fetchProduct } from "@/src/lib/data-service";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const product = await fetchProduct(productId);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductInfo product={product} />
    </>
  );
}
