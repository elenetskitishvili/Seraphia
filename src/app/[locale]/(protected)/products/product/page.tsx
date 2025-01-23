import ProductDetailsAccordion from "@/src/app/components/products/ProductDetailsAccordion";
import ProductInfo from "@/src/app/components/products/ProductInfo";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <>
      <ProductInfo />
      <div className="grid grid-cols-1 990px:grid-cols-2   px-6 770px:px-10 990px:px-0 bg-bgLight 990px:bg-transparent font-bold tracking-tighter">
        <div className="  pb-6 480px:pb-10 770px:pb-14 990px:pb-0   ">
          <Image
            src="/images/hero/image7.jpeg"
            alt="product"
            width={912}
            height={912}
            className="aspect-[1/1] w-full object-cover"
          />
        </div>
        <div className="990px:order-1 py-[60px] 480px:py-20 770px:py-[120px] 990px:py-[160px] 990px:bg-bgLight">
          <h3 className="text-[28px] 480px:text-4xl 770px:text-5xl 990px:text-[64px] mb-6 770px:mb-10">
            Product Info.
          </h3>
          <ProductDetailsAccordion />
        </div>
      </div>
    </>
  );
}
