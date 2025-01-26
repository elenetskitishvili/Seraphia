export default function ProductsPagination() {
  return (
    <div className="mt-14 770px:mt-20">
      <div className="grid grid-cols-3 gap-4 items-center p-[7px] rounded-full border border-bgBtn  770px:w-[620px] 770px:mx-auto">
        <button className="justify-self-start text-xs text-customBlue w-[90px] 480px:w-[124px] h-10 flex items-center justify-center bg-bgMedium rounded-full cursor-pointer font-bold hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
          Previous
        </button>
        <div className="justify-self-center text-base 480px:text-lg font-semibold">
          <span>1</span>
          <span className="inline-block px-[2px] text-xl relative top-[1px]">
            /
          </span>
          <span>2</span>
        </div>
        <button className="justify-self-end text-xs text-customBlue w-[90px] 480px:w-[124px] h-10 flex items-center justify-center bg-bgMedium rounded-full cursor-pointer font-bold hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
          Next
        </button>
      </div>
    </div>
  );
}
