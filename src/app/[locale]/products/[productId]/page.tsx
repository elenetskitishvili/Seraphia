import ProductInfo from "@/src/components/products/ProductInfo";
import { fetchProduct } from "@/src/lib/data-service";
import { createClient } from "@/src/utils/supabase/server";
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

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userId = user ? user.id : null;

  return (
    <>
      <ProductInfo product={product} userId={userId} />
    </>
  );
}
