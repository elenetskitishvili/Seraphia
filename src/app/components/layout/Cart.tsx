"use client";

import { Link } from "@/src/i18n/routing";

interface HeaderNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: HeaderNavProps) {
  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/5 transition-opacity duration-[300ms] opacity-100 z-40"
          onClick={() => onClose()}
        ></div>
      )}

      {/* CART */}
      <div
        className={`z-50 fixed top-0 right-0 w-full 990px:w-[500px] min-h-screen flex flex-col bg-white shadow-lg transition-transform duration-[800ms] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-[cubic-bezier(0.25, 1, 0.5, 1)]`}
      >
        {/* CART HEADER (Fixed) */}
        <div className="flex items-center justify-between border-b border-b-bgBtn py-4 px-6 bg-white sticky top-0 z-10">
          <h4 className="text-xl 480px:text-2xl tracking-tighter">Your Cart</h4>
          <button onClick={onClose} className="text-xl">
            <i className="fa-solid fa-x"></i>
          </button>
        </div>

        {/* CART CONTENT (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
          <p className="text-customGray text-lg text-center">No items found.</p>
        </div>
      </div>
    </>
  );
}
