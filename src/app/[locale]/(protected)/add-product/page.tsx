import AddProductForm from "@/src/components/products/AddProductForm";

export default function AddProduct() {
  return (
    <>
      {/* HERO */}
      <section className="bg-bgLight  grid grid-cols-1 990px:grid-cols-2 990px:h-[800px] 990px:overflow-hidden">
        {/* IMAGE */}
        <div className="">
          <img
            src="/images/hero/image6.jpeg"
            alt="contact"
            className="h-full w-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className=" bg-bgLight pt-[100px] 770px:pt-[140px] 990px:pt-[300px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center tracking-tighter 990px:max-w-[500px] 990px:mx-auto">
          <p className="text-customBlue text-lg 480px:text-xl mb-6  font-semibold">
            Start selling today.
          </p>
          <h1 className="text-[32px] 480px:text-5xl 770px:text-[64px] font-bold leading-none tracking-tighter mb-6 990px:mb-10 ">
            Your Jewelry, Their Treasure
          </h1>
        </div>
      </section>
      <AddProductForm />
    </>
  );
}
