import { Link } from "@/src/i18n/routing";
import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="border-t border-t-bgBtn">
      {/* TOP PART - GRID CONTAINER */}
      <div className="py-[60px] px-6 770px:px-10 grid grid-cols-2 990px:grid-cols-4 gap-x-6 gap-y-10 font-bold max-w-[1360px] mx-auto tracking-tighter">
        {/* 1 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">Information</h2>
          <div className="flex flex-col gap-3 mb-3 ">
            <Link
              href={"/"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              About
            </Link>
            <Link
              href={"/products"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Products
            </Link>
            <Link
              href={"/blogs"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Blog
            </Link>
          </div>
        </div>
        {/* 2 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">Categories</h2>
          <div className="flex flex-col gap-3 mb-3 ">
            <Link
              href={"/products"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Necklaces
            </Link>
            <Link
              href={"/products"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Rings
            </Link>
            <Link
              href={"/products"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Bracelets
            </Link>
            <Link
              href={"/products"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Earrings
            </Link>
          </div>
        </div>
        {/* 3 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">Social</h2>
          <div className="flex flex-col gap-3 mb-3">
            <Link
              href={"https://www.youtube.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-youtube pt-[2px]"></i>
              </span>
              <span>YouTube</span>
            </Link>
            <Link
              href={"https://www.instagram.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-instagram pt-[2px]"></i>
              </span>
              <span>Instagram</span>
            </Link>
            <Link
              href={"https://www.facebook.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-facebook pt-[2px]"></i>
              </span>
              <span>Facebook</span>
            </Link>
            <Link
              href={"https://www.whatsapp.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-whatsapp pt-[2px]"></i>
              </span>
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>
        {/* 4 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">Help</h2>
          <div className="flex flex-col gap-3 mb-3">
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Contact
            </Link>
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Help Center
            </Link>
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Terms of Service
            </Link>
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM PART */}
      <div className="text-center border border-bgBtn grid grid-cols-1 770px:grid-cols-[1fr_2fr_1fr]">
        <div className="border-t text-sm border-bgBtn h-20 770px:h-[120px] flex items-center justify-center">
          <a
            href="tel:+1234567890"
            className="rounded-full border border-t-bgBtn py-[10px] px-8 w-auto"
          >
            <i className="fas fa-phone-alt mx-2"></i>
            <span> 2-967-227</span>
          </a>
        </div>
        <Link
          href={"/"}
          className="border-t border-t-bgBtn 770px:border-x 770px:border-x-bgBtn  h-20 770px:h-[120px] flex items-center justify-center"
        >
          <Image
            width={186}
            height={40}
            src="/svg/logo-main.svg"
            alt="shkopverse logo"
            className="w-[130px] 480px:w-[149px] 770px:w-[186px] h-7 480px:h-8 770px:h-10"
          />
        </Link>
        <div className="border-t border-t-bgBtn  h-20 770px:h-[120px] flex items-center justify-center">
          <div className="flex items justify-center gap-4">
            <Image
              src="/svg/paypal-dark.svg"
              alt="paypal logo"
              width={56}
              height={14}
            />
            <Image
              src="/svg/mastercard-dark.svg"
              alt="mastercard logo"
              width={32}
              height={20}
            />
            <Image
              src="/svg/visa-dark.svg"
              alt="visa logo"
              width={32}
              height={12}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
