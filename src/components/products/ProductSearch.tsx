"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";

export default function ProductSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const updateSearchParams = useCallback(
    debounce((searchQuery) => {
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
        placeholder="Search for your perfect piece..."
        value={query}
        onChange={handleChange}
        className="w-full text-sm border border-gray-400 dark:border-darkModeBorder dark:bg-darkModeBorder py-3 px-4 focus:border-customBlue  dark:border-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none rounded-full"
      />
    </div>
  );
}
