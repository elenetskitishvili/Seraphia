import { Link } from "@/src/i18n/routing";
import { fetchUserProducts } from "@/src/lib/data-service";
import { Product } from "@/src/types/types";
import { createClient } from "@/src/utils/supabase/server";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { getLocale } from "next-intl/server";
import Image from "next/image";

export default async function MyListings() {
  const supabase = await createClient();
  const locale = await getLocale();

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;

  if (!userId) throw new Error("User not authenticated.");

  const products: Product[] = await fetchUserProducts(userId);

  return (
    <div className="p-4 770px:px-10 770px:pt-6 990px:pt-20 990px:pl-0 990px:pr-10">
      <h1 className="text-2xl 990px:text-4xl font-bold tracking-tighter pb-1">
        My Listings
      </h1>
      {products.length === 0 ? (
        <p className="text-customGray text-lg">
          No products listed yet.
          <Link
            href="/en/create-product"
            className="text-primary font-medium underline"
          >
            Create one now
          </Link>
          !
        </p>
      ) : (
        // PRODUCTS LIST
        <ul className="grid grid-cols-2 770px:grid-cols-3 990px:grid-cols-4 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
          {products.map((product) => (
            <li key={product.id} className="">
              <Link href={`/products/${product.id}`} className=" flex flex-col">
                {product.images[0] && (
                  <Image
                    src={product.images?.[0]}
                    width={390}
                    height={390}
                    alt={product.name_en}
                    className="aspect-square w-full object-cover"
                  />
                )}
                <div className="flex flex-col justify-between">
                  <h2
                    className={`text-lg mb-1 mt-2 leading-6 font-semibold  ${
                      locale === "en" ? "tracking-tighter" : ""
                    }`}
                  >
                    {product.name_en}
                  </h2>
                  <div className="flex flex-col 480px:flex-row  gap-3 mt-3">
                    <button className="py-2 px-3 border border-blue-200 rounded-sm flex gap-2 items-center justify-center text-customBlue">
                      <PencilIcon className="w-5 h-5 " /> <span>Modify</span>
                    </button>
                    <button className="p-2 border border-bgBtn items-center justify-center text-customGray rounded-sm  flex gap-2">
                      <TrashIcon className="w-5 h-5 " /> <span>Delete</span>
                    </button>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
