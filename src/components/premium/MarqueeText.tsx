"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MarqueeText() {
  return (
    <div className="overflow-hidden whitespace-nowrap flex py-8 bg-bgMedium">
      <motion.div
        className="flex gap-10 text-lg font-semibold"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
      >
        {[...Array(50)].map((_, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="text-customBlue  text-2xl">
              Upgrade to Premium
            </span>
            <Image
              src="/svg/logo-blue.svg"
              alt="blue logo"
              width={24}
              height={24}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
