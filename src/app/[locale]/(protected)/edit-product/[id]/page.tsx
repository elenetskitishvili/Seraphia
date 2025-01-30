import EditProductForm from "@/src/components/products/EditProductForm";
import { fetchProduct } from "@/src/lib/data-service";
import { Product } from "@/src/types/types";

export default async function EditProduct({
  params,
}: {
  params: { id: string };
}) {
  const productId = await params.id;
  const product: Product | null = await fetchProduct(productId);
  console.log("product🌎", product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <EditProductForm product={product} />;
}
