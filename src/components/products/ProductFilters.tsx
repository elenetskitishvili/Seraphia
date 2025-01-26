"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const categories = [
  "All Products",
  "Necklaces",
  "Rings",
  "Bracelets",
  "Earrings",
];

export default function ProductFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeCategory = searchParams.get("category") || "All Products";

  const handleFilter = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All Products") {
      params.delete("category");
    } else {
      params.set("category", category.toLowerCase()); // Ensure lowercase match with Supabase
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="text-center flex flex-wrap justify-center items-center">
      {categories.map((category) => {
        const isActive =
          activeCategory.toLowerCase() === category.toLowerCase() ||
          (category === "All Products" && !searchParams.get("category"));

        return (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`text-sm 480px:text-base font-bold tracking-tighter py-1 px-5 border border-bgBtn rounded-full m-1 480px:m-[6px] transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer text-customGray hover:bg-bgBtn  
              ${isActive ? "bg-bgBtn " : ""}
              
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
