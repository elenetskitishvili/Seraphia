export interface Product {
  id: number;
  created_at: Date;
  price: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  name_en: string;
  name_ka: string;
  description_en: string;
  description_ka: string;
  category: string;
  images: string[];
}

export interface Blog {
  id: number;
  created_at: Date;
  heading_en: string;
  heading_ka: string;
  content_en: string;
  content_ka: string;
  user_id: string;
  image: string;
}

export type User = {
  id: number;
  created_at: string;
  full_name: string | null;
  phone: string | null;
  address: string | null;
  subscription_plan: string | null;
  expires_at: string | null;
  makes_jewelry: boolean;
  is_admin: boolean;
  max_items: number | null;
  user_id: string;
};

export interface CartItem {
  id: number;
  created_at: string;
  user_id: string;
  product_id: number;
  quantity: number;
  product?: Product;
}

export interface Order {
  id: number;
  created_at: string;
  total_price: number;
  stripe_session_id: string;
  user_id: string;
}

export interface OrderItem {
  id: number;
  created_at: string;
  order_id: number;
  product_id: number;
  quantity: number;
  price_at_purchase: number;
  product?: {
    name_en: string;
    name_ka: string;
    images: string[];
  };
}

export interface OrderWithItems {
  id: number;
  total_price: number;
  created_at: string;
  items: OrderItemWithProduct[];
}

export interface OrderItemWithProduct {
  product: {
    name_en: string;
    name_ka: string;
    image: string;
  } | null;
  product_id: number;
  quantity: number;
  price_at_purchase: number;
}
