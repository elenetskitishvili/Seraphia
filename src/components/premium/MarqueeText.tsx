"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function MarqueeText() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc =
    theme === "dark" ? "/svg/logo-white.svg" : "/svg/logo-blue.svg";

  return (
    <div className="overflow-hidden whitespace-nowrap flex py-8 bg-bgMedium dark:bg-darkModeBg">
      <motion.div
        className="flex gap-10 text-lg font-semibold"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
      >
        {[...Array(50)].map((_, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="text-customBlue dark:text-darkModeText text-2xl">
              Upgrade to Premium
            </span>
            <Image src={logoSrc} alt="blue logo" width={24} height={24} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
