import { ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { fetchBlog } from "@/src/lib/data-service";
import { getLocale } from "next-intl/server";
import { format } from "date-fns";
import { enUS, ka } from "date-fns/locale";

export default async function Blog({ params }: { params: { blogId: string } }) {
  const locale = await getLocale();

  const { blogId } = await params;
  const blog = await fetchBlog(blogId);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const localeFormat = locale === "ka" ? ka : enUS;
  const date = new Date(blog.created_at);
  const formattedTime = format(date, "h:mm a", { locale: localeFormat });
  const formattedDate = format(date, "MMM dd, yyyy", { locale: localeFormat });

  return (
    <>
      <section className="grid grid-cols-1 990px:grid-cols-2 990px:gap-x-[30px] 990px:h-[800px] 990px:overflow-hidden dark:bg-darkModeBgLighter">
        {/* Content */}
        <div className=" bg-bgLight dark:bg-darkModeBgLighter h-[600px] 480px:h-[700px] 770px:h-[800px] flex flex-col items-center justify-center  px-6 770px:px-10 990px:px-8 text-center tracking-tighter  990px:mx-auto">
          {/* SUBHEADING */}
          <div className="text-customGray dark:text-darkModeTextTertiary text-lg font-semibold mb-6 flex flex-col items-center justify-center 990px:flex-row 990px:gap-5">
            <div className="flex items-center justify-center gap-2 ">
              <span>
                <ClockIcon className="size-6 " />
              </span>
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <span>
                <CalendarIcon className="size-6 " />
              </span>
              <span>{formattedDate}</span>
            </div>
          </div>
          <h2
            className={`text-[32px] 480px:text-4xl font-bold  mb-6 990px:mb-10 ${
              locale === "en"
                ? " 770px:text-[64px] leading-none 770px:leading-[55px] tracking-tighter"
                : "leading-loose"
            }`}
          >
            {locale === "en" ? blog.heading_en : blog.heading_ka}
          </h2>
        </div>

        {/* IMAGE */}
        <div className="mt-6 mx-6 990px:mx-auto 990px:self-center flex items-center justify-center">
          <Image
            width={942}
            height={785}
            src={blog.image}
            alt={blog.heading_en}
            className="h-full w-auto object-cover 990px:w-[700px] 990px:h-[560px] dark:brightness-[85%]"
          />
        </div>
      </section>
      {/* BLOG CONTENT */}
      <section className="px-6 770px:px-10 py-[60px] 480px:py-20 770px:py-[120px] max-w-[840px] mx-auto">
        <h3 className="text-[28px] 480px:text-4xl mb-8 leading-none font-bold tracking-tighter">
          {locale === "en" ? blog.heading_en : blog.heading_ka}
        </h3>
        <article className="text-customGray dark:text-darkModeTextSecondary text-lg flex flex-col gap-6">
          <ReactMarkdown>
            {locale === "en" ? blog.content_en : blog.content_ka}
          </ReactMarkdown>
        </article>
      </section>
    </>
  );
}
