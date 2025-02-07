import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import { Product } from "@/src/types/types";
import { getLocale } from "next-intl/server";

export default async function ProductCard({ product }: { product: Product }) {
  const locale = await getLocale();
  return (
    <li>
      <Link
        href={`/products/${product.id}`}
        className="group transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col"
        data-cy="product-card"
      >
        {/* IMAGE */}
        <div className="overflow-hidden mb-6 dark:rounded-md">
          <Image
            width={392}
            height={392}
            src={product.images?.[0]}
            alt={product.name_en}
            className="aspect-square w-full object-cover transform group-hover:scale-105 duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] dark:brightness-[85%] "
          />
        </div>
        {/* DESCRIPTION */}
        <h3
          className={`text-lg mb-1 leading-6 font-semibold dark:text-darkModeTextSecondary  ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {locale === "en" ? product.name_en : product.name_ka}
        </h3>
        <p className="text-base text-customGray dark:text-darkModeTextTertiary font-semibold mt-auto">
          $ {(product.price / 100).toFixed(2)}
          <span className="tracking-tighter"> USD</span>
        </p>
      </Link>{" "}
    </li>
  );
}
