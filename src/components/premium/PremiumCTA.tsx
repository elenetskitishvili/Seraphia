import { Link } from "@/src/i18n/routing";
import MarqueeText from "./MarqueeText";

export default function PremiumCTA() {
  return (
    <section>
      <MarqueeText />

      {/* CONTENT */}
      <div className="bg-customBlue text-center py-[60px] 480px:py-20 770px:py-[120px] px-6 770px:px-[70px]">
        <div className=" max-w-screen-xl mx-auto">
          <p className="text-white text-lg 480px:text-xl mb-6 font-semibold">
            Receive deals every week, no spam
          </p>
          <h1 className="text-[28px] 480px:text-4xl 770px:text-5xl 990px:text-[64px] font-bold leading-none tracking-tighter text-white mb-14">
            Subscribe the newsletter and save 20% on your first order!
          </h1>
          <Link
            href="/contact"
            className="relative w-full 480px:w-auto 480px:px-[50px] text-customBlue bg-white font-bold py-3  rounded-full inline-block mb-7 transition duration-300 transform hover:scale-105 active:scale-[1.04]"
          >
            Go Premium!
          </Link>
        </div>
      </div>
    </section>
  );
}
