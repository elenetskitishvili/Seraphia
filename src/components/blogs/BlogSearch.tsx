"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";

export default function BlogSearch() {
  const t = useTranslations("MyBlogs");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search") ?? "");

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
    <div className=" pt-4 480px:pt-6 770px:pt-4 480px:mx-6 770px:w-[570px] 770px:mx-auto">
      <input
        type="search"
        placeholder={t("search-blogs")}
        value={query}
        onChange={handleChange}
        className="w-full text-sm border dark:border-b-[3px] border-bgDark dark:border-darkModeBorder dark:bg-darkModeBorder py-[14px] px-4 focus:border-customDark dark:focus:border-b-indigo-800 focus:ring-0 outline-none "
      />
    </div>
  );
}
