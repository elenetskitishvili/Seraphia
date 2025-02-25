import React from "react";

export default function HelpCenter() {
  return (
    <section className="bg-bgLight dark:bg-gradient-to-b dark:from-darkModeBgLighter dark:to-indigo-900 text-center pt-[100px] pb-20 480px:py-[240px] 770px:py-[230px] 990px:py-[210px] px-6">
      <h1 className="text-[40px] 480px:text-[56px] 770px:text-[64px] 990px:text-[112px]  font-bold leading-none -tracking-[2px] 990px:-tracking-[5px] mb-6 770px:mb-10">
        Help Center
      </h1>
      <p className="text-lg 480px:text-xl text-customGray dark:text-indigo-500 font-semibold tracking-tight">
        Your go-to resource for all customer questions. Find answers to our most
        frequently asked questions in the Help Center.
      </p>
    </section>
  );
}
