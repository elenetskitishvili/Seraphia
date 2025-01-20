export default function ContactHero() {
  return (
    <section className="bg-bgLight  grid grid-cols-1 min-[990px]:grid-cols-2 min-[990px]:h-[800px] min-[990px]:overflow-hidden">
      {/* Content */}
      <div className=" bg-bgLight pt-[100px] min-[770px]:pt-[140px] min-[990px]:pt-[300px] pb-[80px] min-[480px]:pb-[60px] min-[770px]:pb-[80px] px-6 min-[770px]:px-10 min-[990px]:px-8 text-center tracking-tighter">
        <div className="text-customBlue text-lg min-[480px]:text-xl mb-6  font-semibold">
          Shop more with Shopverse.
        </div>
        <div className="text-[32px] min-[480px]:text-5xl min-[770px]:text-[64px]  min-[990px]:text-[80px]  font-bold leading-none -tracking-[2px] mb-6 min-[990px]:mb-10">
          Need help or have any questions? We are here to assist.
        </div>
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
