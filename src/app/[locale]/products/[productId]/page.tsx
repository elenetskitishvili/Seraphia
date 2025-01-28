import ProductInfo from "@/src/components/products/ProductInfo";
import Image from "next/image";
import { fetchProduct } from "@/src/lib/data-service";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const product = await fetchProduct(productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <ProductInfo product={product} />
    </>
  );
}
