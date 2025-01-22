import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import MenuButton from "./MenuButton";

export default async function Header() {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-50 ">
      <div className="px-6 770px:px-10  py-4 480px:py-6 770px:py-8 990px:py-8 flex items-center justify-between ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/svg/logo-main.svg"
            alt="Logo"
            width={186}
            height={40}
            className="w-[130px] 480px:w-[150px] 770px:w-[186px]"
          />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center text-sm font-bold tracking-tighter">
          <button className="px-2 py-3 tracking-normal font-serif_ge font-light">
            ქარ
          </button>
          <Link href="/cart" className="px-2 py-3 mr-3">
            <span className="pr-[1px]">Cart</span>(
            <span className="text-xs">0</span>)
          </Link>
          <MenuButton />
        </nav>
      </div>
    </header>
  );
}
