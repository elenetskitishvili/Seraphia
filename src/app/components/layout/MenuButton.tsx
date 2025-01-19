"use client";

import { Link } from "@/src/i18n/routing";
import { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative w-6 h-5 cursor-pointer flex items-center justify-center z-50"
      >
        <div
          className={`absolute top-0 w-6 h-[2px] bg-customDark ${
            isOpen ? "bg-white" : ""
          } rounded-sm transition-all duration-200 ease-in-out will-change-transform ${
            isOpen ? "rotate-[135deg] translate-y-[8px]" : ""
          }`}
        ></div>

        <div
          className={`absolute top-2 w-6 h-[2px] bg-customDark ${
            isOpen ? "bg-white" : ""
          } rounded-sm transition-all duration-200 ease-in-out will-change-transform ${
            isOpen ? "opacity-0 scale-0" : ""
          }`}
        ></div>

        <div
          className={`absolute top-4 w-6 h-[2px] bg-customDark ${
            isOpen ? "bg-white" : ""
          } rounded-sm transition-all duration-200 ease-in-out will-change-transform ${
            isOpen ? "-rotate-[135deg] -translate-y-[8px]" : ""
          }`}
        ></div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/5 transition-opacity duration-[3000ms] opacity-100 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Navigation Links */}
      <div
        className={`z-30 fixed top-0 right-0 w-full min-[990px]:w-[730px] h-full bg-customDark transition-transform duration-[800ms] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-[cubic-bezier(0.25, 1, 0.5, 1)]`}
      >
        <div className="flex items-center justify-center bg-customDark">
          <nav
            className={`opacity-0 w-0 transition-opacity duration-[800ms] ${
              isOpen ? "opacity-100 w-full" : ""
            }`}
          >
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 text-center text-3xl  font-light text-white uppercase">
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-2 px-5 transition-all duration-[400ms] hover:bg-[100%] hover:text-customDark hover:transform hover:translate-x-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)",
                    backgroundSize: "250%",
                  }}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-2 px-5 transition-all duration-[400ms] hover:bg-[100%] hover:text-customDark hover:transform hover:translate-x-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)",
                    backgroundSize: "250%",
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-2 px-5 transition-all duration-[400ms] hover:bg-[100%] hover:text-customDark hover:transform hover:translate-x-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)",
                    backgroundSize: "250%",
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/premium"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-2 px-5 transition-all duration-[400ms] hover:bg-[100%] hover:text-customDark hover:transform hover:translate-x-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)",
                    backgroundSize: "250%",
                  }}
                >
                  Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-2 px-5 transition-all duration-[400ms] hover:bg-[100%] hover:text-customDark hover:transform hover:translate-x-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)",
                    backgroundSize: "250%",
                  }}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block py-2 px-5 transition-all duration-[400ms] hover:bg-[100%] hover:text-customDark hover:transform hover:translate-x-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)",
                    backgroundSize: "250%",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
