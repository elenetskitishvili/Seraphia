"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";

export default function ProductSearch() {
  const t = useTranslations("ProductDetails");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const updateSearchParams = useMemo(
    () =>
      debounce((searchQuery: string) => {
        const params = new URLSearchParams(searchParams);
        if (searchQuery.trim()) {
          params.set("search", searchQuery.trim());
        } else {
          params.delete("search");
        }
        params.set("page", "1");
        router.replace(`?${params.toString()}`);
      }, 500),
    [searchParams, router]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    updateSearchParams(e.target.value);
  };

  return (
    <div className="pt-4 480px:pt-6 770px:pt-4 480px:mx-6 770px:w-[570px] 770px:mx-auto">
      <input
        type="search"
        placeholder={t("search")}
        value={query}
        onChange={handleChange}
        className="w-full text-sm border border-gray-400 dark:border-darkModeBorder dark:bg-darkModeBorder py-3 px-4 focus:border-customBlue  dark:border-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none rounded-full"
      />
    </div>
  );
}
