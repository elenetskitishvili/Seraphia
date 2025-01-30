import { fetchOrders } from "@/src/lib/data-service";
import { OrderWithItems } from "@/src/types/types";
import { createClient } from "@/src/utils/supabase/server";

export default async function Orders() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;
  if (!userId) throw new Error("User not authenticated.");

  const orders: OrderWithItems[] = await fetchOrders(userId);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg shadow-md">
              <div className="mb-3">
                <p className="text-lg font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  Placed on: {new Date(order.created_at).toLocaleDateString()}
                </p>
                <p className="font-medium">
                  Total: ${(order.total_price / 100).toFixed(2)}
                </p>
              </div>

              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={item.product?.image ?? ""}
                      alt={item.product?.name_en ?? "Product image"}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium">{item.product?.name_en}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
