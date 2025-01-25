"use server";

export async function addProduct(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 9000));
  console.log("Product was added 🤩");
}
