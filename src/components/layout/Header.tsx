import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header() {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full z-40 ">
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
          <LanguageSwitcher />
          <CartButton />
          <MenuButton />
        </nav>
      </div>
    </header>
  );
}
