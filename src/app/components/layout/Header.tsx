import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import MenuButton from "./MenuButton";

export default async function Header() {
  return (
    <header className="bg-bgLight fixed top-0 left-0 w-full z-50">
      <div className="px-6 min-[765px]:px-10 py-4 flex items-center justify-between ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/svg/logo-main.svg"
            alt="Logo"
            width={150}
            height={32}
            className="w-[130px] min-[480px]:w-[150px]"
          />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center text-sm font-bold tracking-tighter">
          <button className="px-2 py-3 tracking-normal font-serif_ge font-light">
            ქარ
          </button>
          <Link href="/cart" className="px-2 py-3 mr-3">
            Cart(<span className="text-xs">0</span>)
          </Link>
          <MenuButton />
        </nav>
      </div>
    </header>
  );
}
