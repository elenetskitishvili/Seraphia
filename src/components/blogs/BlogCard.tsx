import { Link } from "@/src/i18n/routing";

export default function BlogCard() {
  return (
    <Link
      href={"/blogs"}
      className="border border-bgBtn group transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src="/images/hero/image2.jpeg"
          alt="blog"
          className="aspect-[157/100] w-full object-cover transform group-hover:scale-105 duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="p-6 770px:p-8 font-bold flex flex-col justify-between">
        <h3 className="text-xl 480px:text-2xl tracking-tighter mb-10 770px:mb-14">
          What are the biggest fashion trends for summer 2022?
        </h3>
        <p className="text-base text-customGray ">
          <span className="tracking-tighter mr-1">Read more</span>
          <span>
            <i className="fas fa-arrow-right"></i>
          </span>
        </p>
      </div>
    </Link>
  );
}
