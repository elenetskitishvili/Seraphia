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
            href={"/pricing"}
            className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          >
            Go Premium!
          </Link>
        </div>
      </div>
    </section>
  );
}
