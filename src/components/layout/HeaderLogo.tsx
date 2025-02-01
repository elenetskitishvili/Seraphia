"use client";

import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeaderLogo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc =
    theme === "dark" ? "/svg/logo-main-white.svg" : "/svg/logo-main.svg";

  return (
    <Link
      href="/"
      className="absolute left-0 top-0 pt-4 480px:pt-6 770px:pt-8 990px:pt-8 pl-6 770px:pl-10"
    >
      <Image
        src={logoSrc}
        alt="Logo"
        width={186}
        height={40}
        className="w-[130px] 480px:w-[150px] 770px:w-[186px]"
      />
    </Link>
  );
}
