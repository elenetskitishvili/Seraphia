export async function addToCart({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(
    `Added product ${productId} with quantity ${quantity} to cart 🤩`
  );
}
