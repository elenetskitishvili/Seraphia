"use client";

import { Link } from "@/src/i18n/routing";

interface HeaderNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeaderNav({ isOpen, onClose }: HeaderNavProps) {
  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/5 transition-opacity duration-[3000ms] opacity-100 z-20"
          onClick={() => onClose}
        ></div>
      )}

      {/* NAVIGATION */}
      <div
        className={`z-30 fixed top-0 right-0 w-full 990px:w-[730px] h-full bg-customDark transition-transform duration-[800ms] transform ${
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
                  onClick={() => onClose}
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
                  onClick={() => onClose}
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
                  onClick={() => onClose}
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
                  onClick={() => onClose}
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
                  onClick={() => onClose}
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
                  onClick={() => onClose}
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
