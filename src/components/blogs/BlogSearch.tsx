import React from "react";

export default function BlogSearch() {
  return (
    <div className=" pt-4 480px:pt-6 770px:pt-4 480px:mx-6 770px:w-[570px] 770px:mx-auto">
      <input
        type="search"
        placeholder="Search for blog topics..."
        className="w-full text-sm border dark:border-b-[3px] border-bgDark dark:border-darkModeBorder dark:bg-darkModeBorder py-[14px] px-4 focus:border-customDark dark:focus:border-b-indigo-800 focus:ring-0 outline-none "
      />
    </div>
  );
}
