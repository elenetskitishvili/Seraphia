import { Link } from "@/src/i18n/routing";

export default function HeroContent() {
  return (
    <div className="pt-[100px] min-[770px]:pt-[140px] pb-[80px] min-[480px]:pb-[60px] min-[770px]:pb-[80px] px-6 min-[770px]:px-10 min-[990px]:px-8 text-center tracking-tighter">
      <div className="text-customBlue text-lg min-[480px]:text-xl mb-6  font-semibold">
        Your Shopping Platform
      </div>
      <div className="text-[32px] min-[480px]:text-5xl min-[770px]:text-[64px]  min-[990px]:text-[80px]  font-bold leading-none -tracking-[2px] mb-6">
        Shopverse will change the way you sell online
      </div>
      <Link
        href="/products"
        className="w-full min-[480px]:w-auto min-[480px]:px-[50px]    text-white bg-customBlue font-bold py-3  rounded-full inline-block hover:bg-customBlueDarker transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      >
        <span className="mr-1">Buy Shopverse</span>
        <span>
          <i className="fas fa-arrow-right"></i>
        </span>
      </Link>
    </div>
  );
}
