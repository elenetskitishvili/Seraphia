export default function ContactHero() {
  return (
    <section className="bg-bgLight  grid grid-cols-1 990px:grid-cols-2 990px:h-[800px] 990px:overflow-hidden">
      {/* Content */}
      <div className=" bg-bgLight pt-[100px] 770px:pt-[140px] 990px:pt-[300px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center tracking-tighter">
        <p className="text-customBlue text-lg 480px:text-xl mb-6  font-semibold">
          Shop more with Shopverse.
        </p>
        <h1 className="text-[32px] 480px:text-5xl 770px:text-[64px]  990px:text-[80px]  font-bold leading-none tracking-tighter mb-6 990px:mb-10">
          Need help or have any questions? We are here to assist
        </h1>
      </div>
      {/* IMAGE */}
      <div className="">
        <img
          src="/images/contact/image1.jpeg"
          alt="contact"
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
}
