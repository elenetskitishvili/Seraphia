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

export const fetchOrders = async function (userId: string) {
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
        .select("product_id, quantity")
        .eq("order_id", order.id);

      console.log("orderItems🚀", orderItems);

      if (orderItemsError) {
        console.error(
          `Error fetching order items for order ${order.id}:`,
          orderItemsError
        );
        return { ...order, items: [] };
      }

      return { ...order, items: orderItems };
    })
  );

  const ordersWithProducts = await Promise.all(
    ordersWithItems.map(async (order) => {
      const itemsWithProducts = await Promise.all(
        order.items.map(async (item) => {
          const { data: product, error: productError } = await supabase
            .from("products")
            .select("name_en, name_ka, images")
            .eq("id", item.product_id)
            .single(); // Get only one product

          if (productError) {
            console.error(
              `Error fetching product for product_id ${item.product_id}:`,
              productError
            );
            return { ...item, product: null };
          }

          return {
            ...item,
            product: {
              name_en: product.name_en,
              name_ka: product.name_ka,
              image: product.images?.[0] || null, // Get only the first image
            },
          };
        })
      );

      return { ...order, items: itemsWithProducts };
    })
  );

  console.log(
    "ordersWithProducts🚀",
    JSON.stringify(ordersWithProducts, null, 2)
  );
  return ordersWithProducts;
};
