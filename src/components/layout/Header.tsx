import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { fetchCart } from "@/src/lib/data-service";
import { createClient } from "@/src/utils/supabase/server";
import { CartItem } from "@/src/types/types";

export default async function Header() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full h-0 z-40">
      {/* Logo */}
      <Link
        href="/"
        className="absolute left-0 top-0 pt-4 480px:pt-6 770px:pt-8 990px:pt-8 pl-6 770px:pl-10"
      >
        <Image
          src="/svg/logo-main.svg"
          alt="Logo"
          width={186}
          height={40}
          className="w-[130px] 480px:w-[150px] 770px:w-[186px]"
        />
      </Link>
      {/* Navigation */}
      <div className="absolute right-0 top-0 pt-4 480px:pt-6 770px:pt-8 990px:pt-8 pr-6 770px:pr-10">
        <nav className="flex items-center text-sm font-bold tracking-tighter ">
          <LanguageSwitcher />
          {userId ? <CartButton /> : null}
          <MenuButton />
        </nav>
      </div>
    </header>
  );
}
