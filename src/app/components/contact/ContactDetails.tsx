export default function ContactDetails() {
  return (
    <section className="max-w-[1360px] mx-auto">
      <div className="mx-6 770px:mx-10 pt-[60px] 480px:pt-20  770px:pt-[120px] 990px:pt-40 pb-10 770px:pb-14 grid 990px:grid-cols-3 gap-6 990px:gap-10 border-b border-b-gray-300 tracking-tighter ">
        <div className=" font-bold ">
          <div className="mb-2 text-lg text-customGray ">Send us a message</div>
          <div className="text-xl 480px:text-2xl">contact@template.com</div>
        </div>
        <div className=" font-bold">
          <div className="mb-2 text-lg text-customGray ">Visit our store</div>
          <div className="text-xl 480px:text-2xl">
            4140 Parker Rd. Allentown, Tbilisi 31134
          </div>
        </div>
        <div className=" font-bold">
          <div className="mb-2 text-lg text-customGray ">Give us a call</div>
          <div className="text-xl 480px:text-2xl">+995 558 612 326</div>
        </div>
      </div>
    </section>
  );
}
