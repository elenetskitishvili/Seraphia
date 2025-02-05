import { createClient } from "@/src/utils/supabase/server";
import Image from "next/image";
import CartButton from "../cart/CartButton";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuButton from "./MenuButton";
import HeaderLogo from "./HeaderLogo";
import { Link } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;
  const t = await getTranslations("Navigation");

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full h-0 z-40">
      {/* Logo */}
      <HeaderLogo />
      {/* Navigation */}
      <div className="absolute right-0 top-0 pt-4 480px:pt-6 770px:pt-8 990px:pt-8 pr-6 770px:pr-10">
        <nav className="flex items-center text-sm font-bold tracking-tighter ">
          <LanguageSwitcher />
          {userId ? (
            <CartButton />
          ) : (
            <Link
              href="/sign-in"
              className={` px-3 font-medium text-[17px] hover:text-customBlue dark:hover:text-indigo-400 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]`}
            >
              {t("sign-in")}
            </Link>
          )}

          <MenuButton />
        </nav>
      </div>
    </header>
  );
}
