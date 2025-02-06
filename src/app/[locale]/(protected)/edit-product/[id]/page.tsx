import EditProductForm from "@/src/components/products/EditProductForm";
import { fetchProduct } from "@/src/lib/data-service";
import { Product } from "@/src/types/types";
import { notFound } from "next/navigation";

export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = await resolvedParams.id;
  const product: Product | null = await fetchProduct(productId);

  if (!product) {
    return notFound();
  }

  // Simulate a 3-second delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="pt-[60px] 770px:pt-20 ">
      <EditProductForm product={product} />
    </div>
  );
}
