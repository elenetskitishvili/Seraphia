"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProductInfo() {
  const lastImageRef = useRef<HTMLImageElement | null>(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    if (!lastImageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.boundingClientRect.top < window.innerHeight);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(lastImageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col-reverse 990px:grid 990px:grid-cols-2">
      {/* GALLERY */}
      <div className="pt-[60px] 480px:pt-20 770px:pt-[120px] px-6 480px:pb-10 770px:px-10 990px:px-[44px] pb-6 770px:pb-14 bg-bgLight flex flex-col gap-6 480px:gap-10 770px:gap-14">
        <Image
          src="/images/hero/image5.jpg"
          alt="product"
          width={912}
          height={912}
          className="aspect-[1/1] w-full object-cover"
        />
        <Image
          src="/images/hero/image7.jpeg"
          alt="product"
          width={912}
          height={912}
          className="aspect-[1/1] w-full object-cover"
        />
        <Image
          ref={lastImageRef}
          src="/images/hero/image6.jpeg"
          alt="product"
          width={912}
          height={912}
          className="aspect-[1/1] w-full object-cover"
        />
      </div>

      {/* DESCRIPTION */}
      <div
        className={`990px:h-screen transition-transform duration-300 990px:sticky 990px:top-0 ${
          isSticky ? "990px:sticky 990px:top-0" : "990px:relative"
        }`}
      >
        <div className="pt-[100px] 770px:pt-[140px] 990px:pt-[165px] pb-20 770px:pb-20 px-6 770px:px-10 990px:px-[45px] font-semibold tracking-tighter 770px:max-w-[790px] 770px:mx-auto">
          <h2 className="text-[28px] 480px:text-4xl 770px:text-[64px] mb-6 leading-none 770px:leading-[60px] 480px:-tracking-[2px] 990px:-tracking-[4px] font-bold">
            Halo Diamond Ring White Gold
          </h2>
          <p className="text-xl 480px:text-2xl mb-6 770px:mb-10 text-customGray">
            $ 350.00 USD
          </p>
          <p className="text-lg text-customGray leading-6 770px:max-w-[510px]">
            Maecenas tellus nibh pharetra egestas odio tincidunt semperot
            pharetra. Bibendum pellentesque pharetra auctor scelerisque
            hendrerit pharetra dignissim tristique.
          </p>

          {/* ADD TO CART & QUANTITY */}
          <div className="grid grid-cols-1 480px:grid-cols-[2fr_1fr] gap-4 mt-12 990px:max-w-[560px]">
            <button className="w-full py-[11px] px-4 text-white bg-customBlue rounded-full hover:bg-customBlueDarker transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
              Add to Cart
            </button>
            <input
              type="number"
              defaultValue="1"
              className="w-full py-[10px] px-[18px] rounded-full border border-bgBtn text-customGray bg-bgLighter focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
