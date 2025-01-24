import { Link } from "@/src/i18n/routing";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Link
      href={"/products"}
      className="group transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col"
    >
      {/* IMAGE */}
      <div className="overflow-hidden mb-6">
        <Image
          width={392}
          height={392}
          src="/images/hero/image3.jpg"
          alt="product"
          className="aspect-square w-full object-cover transform group-hover:scale-105 duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
        />
      </div>
      {/* DESCRIPTION */}
      <h3 className="text-lg mb-1 leading-6 font-semibold tracking-tighter">
        Halo Diamond Ring White Gold
      </h3>
      <p className="text-base text-customGray font-semibold tracking-tighter mt-auto">
        $ 350.00 USD
      </p>
    </Link>
  );
}
