export default function ProductDetails() {
  return (
    <div className="mb-[900px] 990px:grid 990px:grid-cols-2">
      {/* DESCRIPTION */}
      <div className="990px:order-1 pt-[100px] 770px:pt-[140px] 990px:pt-[160px] pb-20 770px:pb-20 px-6 770px:px-10 990px:px-[30px] font-semibold tracking-tighter 770px:max-w-[730px] 770px:mx-auto">
        <h2 className=" text-[28px] 480px:text-4xl 770px:text-[64px] mb-6 leading-none 770px:leading-[60px]   480px:-tracking-[2px] 990px:-tracking-[4px] font-bold">
          Halo Diamond Ring White Gold
        </h2>
        <p className="text-xl 480px:text-2xl mb-6 770px:mb-10 text-customGray">
          $ 350.00 USD
        </p>
        <p className="text-lg  text-customGray leading-6 770px:max-w-[510px]">
          Maecenas tellus nibh pharetra egestas odio tincidunt semperot
          pharetra. Bibendum pellentesque pharetra auctor scelerisque hendrerit
          pharetra dignissim tristique.
        </p>

        {/* ADD TO CART & QUANTITY */}
        <div className="grid grid-cols-1 480px:grid-cols-[2fr_1fr] gap-4 mt-12 990px:max-w-[560px]">
          <button className="w-full py-[11px] px-4 text-white bg-customBlue rounded-full">
            Add to Cart
          </button>
          <input
            type="number"
            defaultValue="1"
            className="w-full py-[10px] px-4 rounded-full border border-bgBtn text-customGray focus:border-customBlue focus:ring-0 outline-none "
          />
        </div>
      </div>
      {/* GALLERY */}
      <div className=" pt-[60px] 480px:pt-20 770px:pt-[120px] px-6 480px:pb-10 770px:px-10 990px:px-[44px] pb-6  770px:pb-14 bg-bgLight flex flex-col gap-6 480px:gap-10 770px:gap-14 ">
        <img
          src="/images/hero/image5.jpg"
          alt="product"
          className="aspect-[1/1] w-full object-cover"
        />
        <img
          src="/images/hero/image7.jpeg"
          alt="product"
          className="aspect-[1/1] w-full object-cover"
        />
        <img
          src="/images/hero/image6.jpeg"
          alt="product"
          className="aspect-[1/1] w-full object-cover"
        />
      </div>
    </div>
  );
}
