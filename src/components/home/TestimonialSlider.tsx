"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { useLocale, useTranslations } from "next-intl";

export default function TestimonialSlider() {
  const t = useTranslations("Testimonials");
  const locale = useLocale();
  const testimonials = [
    {
      text: t("testimonial1"),
      name: t("name1"),
      role: t("role1"),
    },
    {
      text: t("testimonial2"),
      name: t("name2"),
      role: t("role2"),
    },
    {
      text: t("testimonial3"),
      name: t("name3"),
      role: t("role3"),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative text-center px-6 770px:px-10 py-[60px] 480px:py-20 770px:py-[120px] 990px:py-40">
      {/* FADING CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center"
        >
          {/* STAR ICONS */}
          <div className="mb-2 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="text-customBlue dark:text-indigo-600 w-5 h-5"
              />
            ))}
          </div>

          {/* TESTIMONIAL TEXT */}
          <p
            className={`text-xl 480px:text-[32px] 770px:text-[40px] py-6 770px:leading-tight ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            {`"${testimonials[index].text}"`}
          </p>

          {/* AUTHOR */}
          <p
            className={`text-customGray dark:text-darkModeTextTertiary text-lg 480px:text-2xl ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            {testimonials[index].name}, {testimonials[index].role}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
