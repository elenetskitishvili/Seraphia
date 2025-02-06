import CreateBlogForm from "@/src/components/blogs/CreateBlogForm";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function CreateBlog() {
  const locale = await getLocale();
  const t = await getTranslations("CreateBlog");

  return (
    <>
      {/* HERO */}
      <section className="bg-bgLight dark:bg-darkModeBorder  grid grid-cols-1 990px:grid-cols-2 990px:h-[800px] 990px:overflow-hidden">
        {/* IMAGE */}
        <div className="relative w-full h-[800px]">
          <Image
            src="/images/hero/image6.jpeg"
            alt="contact"
            fill
            sizes="(max-width: 990px) 100vw, 50vw"
            className="object-cover dark:brightness-[85%]"
            priority
          />
        </div>

        {/* Content */}
        <div className=" bg-bgLight dark:bg-darkModeBorder pt-[100px] 770px:pt-[140px] 990px:pt-[300px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center 990px:max-w-[550px] 990px:mx-auto">
          <p
            className={`text-customBlue dark:text-indigo-600 text-lg 480px:text-xl mb-6  font-semibold ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            {t("subheading")}
          </p>
          <h1
            className={`text-[32px] 480px:text-5xl  font-bold leading-none mb-6 990px:mb-10 ${
              locale === "en"
                ? "tracking-tighter 770px:text-[64px]"
                : "770px:text-[60px]"
            } `}
          >
            {t("heading")}
          </h1>
        </div>
      </section>
      <CreateBlogForm />
    </>
  );
}
