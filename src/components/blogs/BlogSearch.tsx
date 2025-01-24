import React from "react";

export default function BlogSearch() {
  return (
    <div className=" pt-4 480px:pt-6 770px:pt-4 480px:mx-6 770px:w-[570px] 770px:mx-auto">
      <input
        type="search"
        placeholder="Search for blog topics..."
        className="w-full text-sm border border-bgDark py-[14px] px-4 focus:border-customDark focus:ring-0 outline-none "
      />
    </div>
  );
}
