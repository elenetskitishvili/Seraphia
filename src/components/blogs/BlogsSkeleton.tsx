import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogsSkeleton() {
  return (
    <ul className="grid grid-cols-1 480px:grid-cols-2 990px:grid-cols-3 480px:gap-x-6 gap-y-6 480px:gap-y-10 px-6 770px:px-10 py-[60px] 770px:py-20 990px:py-[120px]">
      {[...Array(3)].map((_, index) => (
        <li key={index}>
          <div className="border border-bgBtn dark:border-darkModeBorder group transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)]">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <Skeleton
                width="100%"
                height={224}
                className="aspect-[157/100] w-full"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="p-6 770px:p-8 font-bold flex flex-col justify-between">
              <h3 className="text-xl 480px:text-2xl mb-10 770px:mb-14">
                <Skeleton width="80%" />
              </h3>
              <p className="text-base text-customGray dark:text-darkModeTextTertiary">
                <Skeleton width="100%" />
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
