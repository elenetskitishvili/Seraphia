"use client";
import { useState } from "react";
import HeaderNav from "./HeaderNav";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-6 h-5 cursor-pointer flex items-center justify-center z-40"
      >
        <div
          className={`absolute top-0 w-6 h-[2px] bg-customDark dark:bg-darkModeText ${
            isOpen ? "bg-white" : ""
          } rounded-sm transition-all duration-200 ease-in-out will-change-transform ${
            isOpen ? "rotate-[135deg] translate-y-[8px]" : ""
          }`}
        ></div>

        <div
          className={`absolute top-2 w-6 h-[2px] bg-customDark dark:bg-darkModeText ${
            isOpen ? "bg-white" : ""
          } rounded-sm transition-all duration-200 ease-in-out will-change-transform ${
            isOpen ? "opacity-0 scale-0" : ""
          }`}
        ></div>

        <div
          className={`absolute top-4 w-6 h-[2px] bg-customDark dark:bg-darkModeText ${
            isOpen ? "bg-white" : ""
          } rounded-sm transition-all duration-200 ease-in-out will-change-transform ${
            isOpen ? "-rotate-[135deg] -translate-y-[8px]" : ""
          }`}
        ></div>
      </div>

      <HeaderNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
