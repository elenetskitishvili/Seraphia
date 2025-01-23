import { ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <section className="grid grid-cols-1 990px:grid-cols-2 990px:gap-x-[30px] 990px:h-[800px] 990px:overflow-hidden">
        {/* Content */}
        <div className=" bg-bgLight h-[600px] 480px:h-[700px] 770px:h-[800px] flex flex-col items-center justify-center  px-6 770px:px-10 990px:px-8 text-center tracking-tighter  990px:mx-auto">
          {/* SUBHEADING */}
          <div className="text-customGray text-lg font-semibold mb-6 flex flex-col items-center justify-center 990px:flex-row 990px:gap-5">
            <div className="flex items-center justify-center gap-2 ">
              <span>
                <ClockIcon className="size-6 " />
              </span>
              <span>Dec 31, 2024</span>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <span>
                <CalendarIcon className="size-6 " />
              </span>
              <span>7 min read</span>
            </div>
          </div>
          <h2 className="text-[32px] 480px:text-4xl 770px:text-[64px] font-bold leading-none 770px:leading-[55px] tracking-tighter mb-6 990px:mb-10 ">
            Affordable fashion clothes combos for every occasion
          </h2>
        </div>

        {/* IMAGE */}
        <div className="mt-6 mx-6 990px:mx-auto 990px:self-center flex items-center justify-center">
          <Image
            width={942}
            height={785}
            src="/images/contact/image1.jpeg"
            alt="contact"
            className="h-full w-auto object-cover 990px:w-[700px] 990px:h-[560px]"
          />
        </div>
      </section>
    </>
  );
}
