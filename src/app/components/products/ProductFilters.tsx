export default function ProductFilters() {
  return (
    <div className="text-center flex flex-wrap justify-center items-center">
      <button className="text-sm 480px:text-base font-bold text-customGray tracking-tighter py-1 px-5 border border-bgBtn rounded-full m-1 480px:m-[6px] hover:bg-bgBtn transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer ">
        All Products
      </button>
      <div className="flex flex-wrap justify-center items-center">
        <button className="text-sm 480px:text-base font-bold text-customGray tracking-tighter py-1 px-5 border border-bgBtn rounded-full m-1 480px:m-[6px] hover:bg-bgBtn transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer">
          Necklaces
        </button>
        <button className="text-sm 480px:text-base font-bold text-customGray tracking-tighter py-1 px-5 border border-bgBtn rounded-full m-1 480px:m-[6px] hover:bg-bgBtn transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer">
          Rings
        </button>
        <button className="text-sm 480px:text-base font-bold text-customGray tracking-tighter py-1 px-5 border border-bgBtn rounded-full m-1 480px:m-[6px] hover:bg-bgBtn transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer">
          Bracelets
        </button>
        <button className="text-sm 480px:text-base font-bold text-customGray tracking-tighter py-1 px-5 border border-bgBtn rounded-full m-1 480px:m-[6px] hover:bg-bgBtn transition-all duration-[600ms] ease-[cubic-bezier(.23,1,.32,1)] cursor-pointer">
          Earrings
        </button>
      </div>
    </div>
  );
}
