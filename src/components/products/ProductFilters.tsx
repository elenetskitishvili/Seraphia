"use client";

import { useTranslations } from "next-intl";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const categories = [
  { key: "all", value: "All Products" },
  { key: "necklaces", value: "Necklaces" },
  { key: "rings", value: "Rings" },
  { key: "bracelets", value: "Bracelets" },
  { key: "earrings", value: "Earrings" },
];

export default function ProductFilters() {
  const t = useTranslations("ProductDetails");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeCategory = searchParams.get("category") || "All Products";

  const handleFilter = (categoryKey: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryKey === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryKey.toLowerCase());
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="text-center flex flex-wrap justify-center items-center">
      {categories.map(({ key, value }) => {
        const isActive =
          activeCategory.toLowerCase() === key ||
          (key === "all" && !searchParams.get("category"));

        return (
          <button
            key={key}
            onClick={() => handleFilter(key)}
            className={`text-sm 480px:text-base font-bold tracking-tighter py-1 px-5 border border-bgBtn dark:bg-darkModeBorder dark:border-darkModeBorder rounded-full m-1 480px:m-[6px] transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer text-customGray dark:text-darkModeText hover:bg-bgBtn  
              ${isActive ? "bg-bgBtn dark:bg-indigo-600" : ""}
              
            `}
          >
            {t(key)}
          </button>
        );
      })}
    </div>
  );
}
