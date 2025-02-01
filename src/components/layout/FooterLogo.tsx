"use client";

import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FooterLogo() {
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
      className="border-t border-t-bgBtn dark:border-t-darkModeBorder 770px:border-x 
                 770px:border-x-bgBtn dark:770px:border-x-darkModeBorder 
                 h-20 770px:h-[120px] flex items-center justify-center"
    >
      <Image
        width={186}
        height={40}
        src={logoSrc}
        alt="Shkopverse logo"
        className="w-[130px] 480px:w-[149px] 770px:w-[186px] h-7 480px:h-8 770px:h-10"
      />
    </Link>
  );
}
