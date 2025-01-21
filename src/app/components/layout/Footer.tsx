import { Link } from "@/src/i18n/routing";

export default async function Footer() {
  return (
    <footer className="py-[60px] px-6 770px:px-10">
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-2 990px:grid-cols-4 gap-x-6 gap-y-10 font-bold max-w-[1360px] mx-auto tracking-tighter">
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
    </footer>
  );
}
