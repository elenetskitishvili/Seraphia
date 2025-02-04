"use client";
import {
  ShoppingBagIcon,
  UserIcon,
  Squares2X2Icon,
  PencilSquareIcon,
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
  {
    name: "My Blogs",
    href: "/account/my-blogs",
    icon: <PencilSquareIcon className="h-5 w-5 990px:h-6 990px:w-6" />,
  },
];

export default function SideNavigation() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="990px:border-r 990px:border-r-bgBtn dark:990px:border-r-darkModeBorder  pt-[120px] px-6 770px:px-10 990px:px-0 ">
      <ul className="flex flex-col 770px:flex-row 990px:flex-col gap-2 h-full text-base 990px:text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={` py-3 px-5 hover:bg-bgLight dark:hover:bg-indigo-600 transition-colors flex items-center gap-4 font-medium hover:text-customBlue dark:hover:text-white ${
                pathname === `/${locale}${link.href}`
                  ? "bg-bgLight dark:bg-indigo-600 text-customBlue dark:text-white"
                  : ""
              } transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="990px:mt-10 770px:ml-auto  990px:ml-0  990px:px-6 990px:w-full">
          <form action={signOutAction} className="hidden 770px:block">
            <input type="hidden" name="locale" value={locale} />
            <button
              type="submit"
              className="990px:w-full py-3 px-5 990px:px-10 rounded-sm dark:rounded-full text-customBlue dark:text-white 990px:text-white bg-bgLight dark:bg-indigo-600 990px:bg-customBlue dark:990px:bg-indigo-600 hover:bg-bgMedium dark:hover:bg-indigo-500 990px:hover:bg-customBlueDarker dark:990px:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              Sign out
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}
