import { Link } from "@/src/i18n/routing";

export default function ContactFAQ() {
  return (
    <div className="border-t border-t-gray-300 text-center tracking-tighter py-[60px] 480px:py-20 770px:py-[120px] 990px:py-40">
      <p className="text-customGray text-lg 480px:text-xl mb-3  font-semibold">
        Frequently Asked Questions
      </p>
      <Link
        href="/contact"
        className="text-2xl 480px:text-[32px] 770px:text-[40px]  990px:text-[56px]  font-bold leading-none -tracking-[2px] mb-6 990px:mb-10 hover:text-customBlue transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      >
        Visit our Help Center
      </Link>
    </div>
  );
}
