import { Link } from "@/src/i18n/routing";
import { Blog } from "@/src/types/types";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function BlogCard({ blog }: { blog: Blog }) {
  const locale = await getLocale();
  const t = await getTranslations("CreateBlog");
  return (
    <li>
      <Link
        href={`/blogs/${blog.id}`}
        className="border border-bgBtn dark:border-darkModeBorder group transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <Image
            width={352}
            height={224}
            src={blog.image}
            alt={blog.heading_en}
            className="aspect-[157/100] w-full object-cover transform group-hover:scale-105 duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] dark:brightness-[85%]"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="p-6 770px:p-8 font-bold flex flex-col justify-between">
          <h3
            className={`text-xl 480px:text-2xl  mb-10 770px:mb-14 ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            {locale === "en" ? blog.heading_en : blog.heading_ka}
          </h3>
          <p className="text-base text-customGray dark:text-darkModeTextTertiary ">
            <span
              className={` mr-1  ${locale === "en" ? "tracking-tighter" : ""}`}
            >
              {t("read-more")}
            </span>
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
}
