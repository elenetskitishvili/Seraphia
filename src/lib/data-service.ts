import { createClient } from "@/src/utils/supabase/server";
import { Product, Blog, OrderWithItems } from "@/src/types/types";

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

    return data;
  } catch (err) {
    console.error((err as Error).message);
    return null;
  }
};

// USER
export const fetchUserProfile = async function (userId: string) {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error || !data) {
      console.error("User profile not found:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error((err as Error).message);
    return null;
  }
};

// CART
export const fetchCart = async function (userId: string) {
  const supabase = await createClient();
  try {
    const { data: cartItems, error } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw new Error(`Error fetching cart items: ${error.message}`);
    }

    return cartItems;
  } catch (err) {
    console.error((err as Error).message);
    return [];
  }
};

// ORDERS

export const fetchOrders = async function (
  userId: string
): Promise<OrderWithItems[]> {
  try {
    const supabase = await createClient();

    const { data: orders, error: ordersError } = await supabase
      .from("orders")
      .select("id, total_price, created_at")
      .eq("user_id", userId);

    if (ordersError) {
      console.error("Error fetching orders:", ordersError);
      return [];
    }

    const ordersWithItems = await Promise.all(
      orders.map(async (order) => {
        const { data: orderItems, error: orderItemsError } = await supabase
          .from("order_items")
          .select("product_id, quantity, price_at_purchase")
          .eq("order_id", order.id);

        if (orderItemsError) {
          console.error(
            `Error fetching order items for order ${order.id}:`,
            orderItemsError
          );
          return { ...order, items: [] };
        }

        const itemsWithProducts = await Promise.all(
          orderItems.map(async (item) => {
            const { data: product, error: productError } = await supabase
              .from("products")
              .select("name_en, name_ka, images")
              .eq("id", item.product_id)
              .single();

            if (productError) {
              console.error(
                `Error fetching product for product_id ${item.product_id}:`,
                productError
              );
              return { ...item, product: null }; // Ensure all required properties are included
            }

            return {
              ...item,
              product: {
                name_en: product.name_en,
                name_ka: product.name_ka,
                image: product.images?.[0],
              },
            };
          })
        );

        return { ...order, items: itemsWithProducts };
      })
    );

    return ordersWithItems;
  } catch (error) {
    console.error("Unexpected error in fetchOrders:", error);
    return [];
  }
};

export async function fetchUserProducts(userId: string): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Failed to fetch user products");

  return data || [];
}

export async function fetchUserBlogs(userId: string): Promise<Blog[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Failed to fetch user Blogs");

  return data || [];
}
