"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-between gap-2 480px:gap-3 770px:gap-4 ml-10 mt-20 480px:mt-[28px] 770px:ml-10 ">
      {/* LIGHT MODE BUTTON */}
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-2 text-white 480px:text-base 770px:text-lg border border-customGray py-1 px-3 rounded-md focus:outline-none transition transform duration-300 ease-in-out active:scale-95 ${
          theme === "light"
            ? "bg-indigo-600"
            : "bg-transparent hover:bg-indigo-500"
        }`}
      >
        <SunIcon className="w-5 h-5" />
        <span>Light</span>
      </button>

      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-2 text-white 480px:text-base 770px:text-lg border border-customGray py-1 px-3 rounded-md focus:outline-none transition transform duration-300 ease-in-out active:scale-95 ${
          theme === "dark"
            ? "bg-indigo-600"
            : "bg-transparent hover:bg-indigo-500"
        }`}
      >
        <MoonIcon className="w-5 h-5" />
        <span>Dark</span>
      </button>

      {/* SYSTEM MODE BUTTON */}
      <button
        onClick={() => setTheme("system")}
        className={`flex items-center gap-2 text-white 480px:text-base 770px:text-lg border border-customGray py-1 px-3 rounded-md focus:outline-none transition transform duration-300 ease-in-out active:scale-95 ${
          theme === "system"
            ? "bg-indigo-600"
            : "bg-transparent hover:bg-indigo-500"
        }`}
      >
        <ComputerDesktopIcon className="w-5 h-5" />
        <span>System</span>
      </button>
    </div>
  );
}
