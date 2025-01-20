"use client";

import { motion } from "framer-motion";

const row1Images = [
  "/images/hero/image1.jpg",
  "/images/hero/image2.jpg",
  "/images/hero/image3.jpg",
  "/images/hero/image4.jpg",
];

const row2Images = [
  "/images/hero/image5.jpg",
  "/images/hero/image6.jpg",
  "/images/hero/image7.jpg",
  "/images/hero/image8.jpg",
];

export default function HeroMarquee() {
  return (
    <div className="overflow-hidden bg-bgMedium py-3 480px:py-6 990px:py-48 space-y-3  480px:space-y-6">
      {/* First Row - Moves Left */}
      <motion.div
        className="flex whitespace-nowrap space-x-3 480px:space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...row1Images, ...row1Images].map((src, index) => (
          <img
            key={`row1-${index}`}
            src={src}
            alt={`Marquee ${index + 1}`}
            className="w-[120px] h-[120px] 480px:w-[180px] 480px:h-[180px] 770px:w-60 770px:h-60 object-cover"
          />
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div
        className="flex whitespace-nowrap space-x-3 480px:space-x-6"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...row2Images, ...row2Images].map((src, index) => (
          <img
            key={`row2-${index}`}
            src={src}
            alt={`Marquee ${index + 1}`}
            className="w-[120px] h-[120px] 480px:w-[180px] 480px:h-[180px] 770px:w-60 770px:h-60 object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
}
