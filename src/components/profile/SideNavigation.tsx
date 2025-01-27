"use client";
import {
  ShoppingBagIcon,
  UserIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import { signOutAction } from "@/src/app/actions";
import { useLocale } from "next-intl";
import { Link } from "@/src/i18n/routing";

const navLinks = [
  {
    name: "My Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 990px:h-6 990px:w-6 " />,
  },
  {
    name: "Order History",
    href: "/account/orders",
    icon: <ShoppingBagIcon className="h-5 w-5 990px:h-6 990px:w-6" />,
  },
  {
    name: "My Listings",
    href: "/account/my-listings",
    icon: <Squares2X2Icon className="h-5 w-5 990px:h-6 990px:w-6" />,
  },
];

export default function SideNavigation() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="990px:border-r 990px:border-r-bgBtn  pt-[120px] px-6 770px:px-10 990px:px-0 ">
      <ul className="flex flex-col 770px:flex-row 990px:flex-col gap-2 h-full text-base 990px:text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={` py-3 px-5 hover:bg-bgLight transition-colors flex items-center gap-4 font-medium hover:text-customBlue ${
                pathname === `/${locale}${link.href}`
                  ? "bg-bgLight text-customBlue"
                  : ""
              } transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="990px:mt-auto 770px:ml-auto 990px:mx-auto 990px:mb-10">
          <form action={signOutAction} className="hidden 770px:block">
            <input type="hidden" name="locale" value={locale} />
            <button
              type="submit"
              className=" py-3 px-5 990px:px-10 rounded-sm text-customBlue 990px:text-white bg-bgLight 990px:bg-customBlue hover:bg-bgMedium 990px:hover:bg-customBlueDarker transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Sign out
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}
