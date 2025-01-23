export default function CreateBlog() {
  return (
    <>
      {/* HERO */}
      <section className="bg-bgLight  grid grid-cols-1 990px:grid-cols-2 990px:h-[800px] 990px:overflow-hidden">
        {/* IMAGE */}
        <div className="">
          <img
            src="/images/hero/image6.jpeg"
            alt="contact"
            className="h-full w-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className=" bg-bgLight pt-[100px] 770px:pt-[140px] 990px:pt-[300px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center tracking-tighter 990px:max-w-[550px] 990px:mx-auto">
          <p className="text-customBlue text-lg 480px:text-xl mb-6  font-semibold">
            Sparkle, Shine, and Share
          </p>
          <h1 className="text-[32px] 480px:text-5xl 770px:text-[64px] font-bold leading-none tracking-tighter mb-6 990px:mb-10 ">
            Inspire with Your Jewelry Story
          </h1>
        </div>
      </section>
      {/* CREATE BLOG FORM */}
      <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
        <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
          <div className="flex flex-col  mt-6">
            <p className="pb-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn">
              Write your blog in both English and Georgian to reach a wider
              audience.
            </p>
            <p className="py-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn">
              More people will engage with your content!
            </p>
            <p className="py-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn">
              For the best display, please upload square images (1:1 ratio).
            </p>
            <p className="pt-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] ">
              All fields are required.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-4">
            {/* HEADING ENGLISH */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor=""
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                Blog Heading (English)
              </label>
              <input
                type="text"
                placeholder="Enter blog heading in English"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            </div>
            {/* HEADING GEORGIAN */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor=""
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                Blog Heading (Georgian)
              </label>
              <input
                type="text"
                placeholder="ბლოგის სათაური ქართულად"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            </div>

            {/* CONTENT ENGLISH */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor=""
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                Blog Content (English)
              </label>
              <textarea
                placeholder="Write your blog content in English"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
              />
            </div>
            {/* CONTENT GEORGIAN */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor=""
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                Blog Content (Georgian)
              </label>
              <textarea
                placeholder="ბლოგის ტექსტი ქართულად"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
              />
            </div>

            {/* IMAGE */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor=""
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                required
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="480px:self-end">
              <button className="w-full 480px:w-auto 480px:px-[50px]    text-customBlue bg-bgMedium font-medium py-3  rounded-full inline-block hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 ">
                <span className="">Create Blog</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
