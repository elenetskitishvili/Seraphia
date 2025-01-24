"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale: string = pathname.split("/")[1] || "en";

  const toggleLanguage = (): void => {
    const newLocale = currentLocale === "en" ? "ka" : "en";

    const newPathname = `/${newLocale}${pathname.substring(3)}`;

    router.push(newPathname);
  };

  return (
    <button
      className="px-2 py-3 tracking-normal font-light"
      onClick={toggleLanguage}
    >
      {currentLocale === "en" ? "ქარ" : "Eng"}
    </button>
  );
}
