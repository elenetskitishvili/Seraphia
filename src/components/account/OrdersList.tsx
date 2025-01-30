import { Link } from "@/src/i18n/routing";
import { OrderWithItems } from "@/src/types/types";
import Image from "next/image";

export default function OrdersList({ orders }: { orders: OrderWithItems[] }) {
  return (
    <ul className="space-y-6">
      {orders.map((order) => (
        <li key={order.id} className="border-t border-r-bgBtn py-6">
          <div className="font-medium">
            <p className="">
              <span className="tracking-tight">Created at: </span>
              {new Date(order.created_at).toLocaleDateString()}
            </p>
            <p className="">
              <span className="tracking-tight">Total price: </span>
              <span className="font-medium">${order.total_price / 100}</span>
            </p>
          </div>
          <ul className="mt-4 space-y-4">
            {order.items.map((item) => (
              <li
                key={item.product_id}
                className=" border border-bgBtn max-w-screen-lg"
              >
                <Link
                  href={`/products/${item.product_id}`}
                  className="flex items-center gap-4 p-2"
                >
                  {item.product?.image && (
                    <Image
                      width={100}
                      height={100}
                      src={item.product.image}
                      alt={item.product.name_en}
                      className="w-20 h-20 990px:w-24 990px:h-24 object-cover rounded-sm"
                    />
                  )}
                  <div>
                    <p className=" font-medium 990px:text-lg">
                      {item.product?.name_en || "Unknown"}
                    </p>
                    <p className="text-customGray text-sm 990px:text-base">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-customGray text-sm 990px:text-base">
                      Price:
                      <span className="font-medium ml-1">
                        ${item.price_at_purchase / 100}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
