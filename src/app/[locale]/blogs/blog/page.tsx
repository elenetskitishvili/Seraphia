import { ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Blog() {
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
            className="h-full w-auto object-cover 990px:w-[700px] 990px:h-[560px] dark:brightness-[85%]"
          />
        </div>
      </section>
      {/* BLOG CONTENT */}
      <section className="px-6 770px:px-10 py-[60px] 480px:py-20 770px:py-[120px] max-w-[840px] mx-auto">
        <h3 className="text-[28px] 480px:text-4xl mb-8 leading-none font-bold tracking-tighter">
          How to dress smart for your professional goals this year?
        </h3>
        <article className="text-customGray dark:text-darkModeTextSecondary text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex esse
          unde, eum debitis quia natus corrupti voluptates facilis voluptate
          atque itaque necessitatibus ipsa corporis ut, praesentium doloribus,
          cumque deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error ex esse unde, eum debitis quia natus corrupti voluptates
          facilis voluptate atque itaque necessitatibus ipsa corporis ut,
          praesentium doloribus, cumque deserunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error ex esse unde, eum debitis quia
          natus corrupti voluptates facilis voluptate atque itaque
          necessitatibus ipsa corporis ut, praesentium doloribus, cumque
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error ex esse unde, eum debitis quia natus corrupti voluptates facilis
          voluptate atque itaque necessitatibus ipsa corporis ut, praesentium
          doloribus, cumque deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Error ex esse unde, eum debitis quia natus corrupti
          voluptates facilis voluptate atque itaque necessitatibus ipsa corporis
          ut, praesentium doloribus, cumque deserunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error ex esse unde, eum debitis quia
          natus corrupti voluptates facilis voluptate atque itaque
          necessitatibus ipsa corporis ut, praesentium doloribus, cumque
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error ex esse unde, eum debitis quia natus corrupti voluptates facilis
          voluptate atque itaque necessitatibus ipsa corporis ut, praesentium
          doloribus, cumque deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Error ex esse unde, eum debitis quia natus corrupti
          voluptates facilis voluptate atque itaque necessitatibus ipsa corporis
          ut, praesentium doloribus, cumque deserunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error ex esse unde, eum debitis quia
          natus corrupti voluptates facilis voluptate atque itaque
          necessitatibus ipsa corporis ut, praesentium doloribus, cumque
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error ex esse unde, eum debitis quia natus corrupti voluptates facilis
          voluptate atque itaque necessitatibus ipsa corporis ut, praesentium
          doloribus, cumque deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Error ex esse unde, eum debitis quia natus corrupti
          voluptates facilis voluptate atque itaque necessitatibus ipsa corporis
          ut, praesentium doloribus, cumque deserunt.
        </article>
      </section>
    </>
  );
}
