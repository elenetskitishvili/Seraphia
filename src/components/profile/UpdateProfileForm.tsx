"use client";

import { signOutAction } from "@/src/app/actions";
import { useLocale } from "next-intl";

export default function UpdateProfileForm() {
  const locale = useLocale();
  return (
    <>
      <form className="pt-10 990px:pt-[120px] pb-10 480px:pb-20 770px:pb-[120px] max-w-[1100px] ">
        <div className="flex flex-col gap-4 px-6 770px:px-10">
          {/* NAME */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>
          {/* SUBJECT */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="options"
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Subject
            </label>
            <select
              id="options"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="option1">Information request</option>
              <option value="option2">Shipping or refund</option>
              <option value="option3">Premium membership</option>
              <option value="option3">other</option>
            </select>
          </div>
          {/* MESSAGE */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Message
            </label>
            <textarea
              placeholder="Enter a message"
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
