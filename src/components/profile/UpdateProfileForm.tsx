"use client";

import { signOutAction } from "@/src/app/actions";
import { useLocale } from "next-intl";

export default function UpdateProfileForm() {
  const locale = useLocale();
  return (
    <>
      <form className="pt-10 990px:pt-[120px] pb-10 480px:pb-20 770px:pb-[120px] max-w-[1100px] ">
        <div className="flex flex-col gap-4 px-6 770px:px-10">
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Email
            </label>
            <input
              type="email"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* SUBSCRIPTION PLAN */}
          <div className="flex flex-col gap-[5px]">
            <label className="text-sm text-customGray font-bold tracking-tight leading-6">
              Subscription plan
            </label>
            <input
              type="text"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* SUBSCRIPTION EXPIRY */}
          <div className="flex flex-col gap-[5px]">
            <label className="text-sm text-customGray font-bold tracking-tight leading-6">
              Subscription expiry
            </label>
            <input
              type="date"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* MAX ITEMS */}
          <div className="flex flex-col gap-[5px]">
            <label className="text-sm text-customGray font-bold tracking-tight leading-6">
              Maximum items you can sell
            </label>
            <input
              type="number"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* NAME */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Phone number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>

          {/* MAKES JEWELRY */}
          <div className="flex items-center gap-3 py-3">
            <input
              type="checkbox"
              id="makes_jewelry"
              className="w-5 h-5 cursor-pointer"
            />
            <label
              htmlFor="makes_jewelry"
              className="text-[15px] text-customGray font-bold tracking-tight leading-6 cursor-pointer"
            >
              I Make Jewelry Myself
            </label>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Address
            </label>
            <textarea
              placeholder="Enter your address"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="480px:self-end">
            <button className="w-full 480px:w-auto 480px:px-[50px]    text-customBlue bg-bgLight font-medium py-3  rounded-sm inline-block hover:bg-bgMedium transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 ">
              <span className="">Update profile</span>
            </button>
          </div>
        </div>
      </form>

      <form
        action={signOutAction}
        className="770px:hidden py-6 px-6  border-t border-t-bgBtn 480px:flex 480px:items-center 480px:justify-center "
      >
        <input type="hidden" name="locale" value={locale} />
        <button
          type="submit"
          className="w-full 480px:w-[250px] 480px:px-[50px]  text-white bg-customBlue font-medium py-3  rounded-sm inline-block hover:bg-customBlueDarker transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 "
        >
          Sign out
        </button>
      </form>
    </>
  );
}
