"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface ProductsPaginationProps {
  params: { [key: string]: string | string[] | undefined };
  total: number; // ✅ Ensure total count is passed
}

export default function ProductsPagination({
  params,
  total,
}: ProductsPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(params.page) || 1;
  const limit = 2;
  const validTotal = Number.isFinite(total) ? total : 0;
  const totalPages = Math.max(1, Math.ceil(validTotal / limit));

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", newPage.toString());
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="mt-14 770px:mt-20">
      <div className="grid grid-cols-3 gap-4 items-center p-[7px] rounded-full border border-bgBtn 770px:w-[620px] 770px:mx-auto">
        {page > 1 ? (
          <button
            className="justify-self-start text-xs text-customBlue w-[90px] 480px:w-[124px] h-10 flex items-center justify-center bg-bgMedium rounded-full cursor-pointer font-bold hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        ) : (
          <span>&nbsp;</span>
        )}

        <div className="justify-self-center text-base 480px:text-lg font-semibold">
          <span>{page}</span>
          <span className="inline-block px-[2px] text-xl relative top-[1px]">
            /
          </span>
          <span>{totalPages}</span>
        </div>

        {page < totalPages && (
          <button
            className="justify-self-end text-xs text-customBlue w-[90px] 480px:w-[124px] h-10 flex items-center justify-center bg-bgMedium rounded-full cursor-pointer font-bold hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
