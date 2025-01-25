import { createClient } from "@/src/utils/supabase/server";
import { Product, Blog } from "@/src/types/types";

// PRODUCTS
export const fetchProducts = async function (): Promise<Product[]> {
  const supabase = await createClient();
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");
    if (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
    return products;
  } catch (err) {
    console.error((err as Error).message);
    return [];
  }
};

export const fetchProduct = async function (
  id: string
): Promise<Product | null> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      console.error("Product not found:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error((err as Error).message);
    return null;
  }
};

// BLOGS
export const fetchBlogs = async function (): Promise<Blog[]> {
  const supabase = await createClient();
  try {
    const { data: blogs, error } = await supabase.from("blogs").select("*");
    if (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
    return blogs;
  } catch (err) {
    console.error((err as Error).message);
    return [];
  }
};

export const fetchBlog = async function (id: string): Promise<Blog | null> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      console.error("Blog not found:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error((err as Error).message);
    return null;
  }
};
