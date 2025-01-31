import CheckoutFormPremium from "@/src/components/premium/CheckoutFormPremium";

export default async function Pricing() {
  return (
    <section className="my-[120px] max-w-lg min-[900px]:max-w-[1200px] mx-auto px-10">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-10 min-[900px]:gap-6 990px:gap-12">
        {/* FIRST CARD */}
        <div className="group perspective-1500 relative h-auto min-[900px]:h-[520px]">
          <div className="w-full rounded-[3px] overflow-hidden backface-hidden bg-white h-auto min-[900px]:h-[520px] transition-all duration-[800ms] ease-in-out group-hover:-rotate-y-180 relative min-[900px]:absolute top-0 left-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {/* CARD PICTURE */}
            <div
              className="h-[230px] "
              style={{
                backgroundImage:
                  "url('/images/premium/premium1.jpg'), linear-gradient(to bottom right, #ffb900, #ff7730)",
                backgroundBlendMode: "screen",
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%",
              }}
            ></div>
            {/* CARD HEADING */}
            <h3 className="text-[28px] font-light uppercase text-white absolute top-[120px] right-5 text-right w-[75%]">
              <span className="decoration-clone py-[10px] px-[15px] bg-gradient-to-tr from-[rgba(255,185,0,0.85)] to-[rgba(255,119,48,0.85)]">
                Standard Seller
              </span>
            </h3>
            {/* CARD DETAILS */}
            <div className="p-[30px]">
              <ul className="w-[80%] mx-auto">
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Sell up to 5 items
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  No subscription needed
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Great for small sellers
                </li>
                <li className="text-center text-[15px] p-[10px] ">
                  Upgrade anytime
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full rounded-[3px] backface-hidden h-[500px] transition-all duration-[800ms] rotate-y-180  group-hover:rotate-y-0  absolute top-0 left-0 bg-gradient-to-br from-[#ffb900] to-[#ff7730] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
              <div className=" mb-20 text-white">
                <p className="text-[15px]">Forever</p>
                <p className="text-[60px] font-thin">FREE</p>
              </div>
              <button className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                Start Selling
              </button>
            </div>
          </div>
        </div>
        {/* SECOND CARD */}
        <div className="group perspective-1500 relative h-auto min-[900px]:h-[520px]">
          <div className="w-full rounded-[3px] overflow-hidden backface-hidden bg-white h-auto min-[900px]:h-[520px] transition-all duration-[800ms] ease-in-out group-hover:-rotate-y-180 relative min-[900px]:absolute top-0 left-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {/* CARD PICTURE */}
            <div
              className="h-[230px]"
              style={{
                backgroundImage:
                  "url('/images/premium/premium2.jpg'), linear-gradient(to bottom right, #7ed56f, #28b485)",
                backgroundBlendMode: "screen",
                backgroundSize: "cover",
                backgroundPosition: "top",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%",
              }}
            ></div>
            {/* CARD HEADING */}
            <h3 className="text-[28px] font-light uppercase text-white absolute top-[120px] right-5 text-right w-[75%]">
              <span className="decoration-clone py-[10px] px-[15px] bg-gradient-to-tr from-[rgba(126,213,111,0.85)] to-[rgba(40,180,133,0.85)]">
                Premium Seller
              </span>
            </h3>
            {/* CARD DETAILS */}
            <div className="p-[30px]">
              <ul className="w-[80%] mx-auto">
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Sell unlimited products
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  No restrictions
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Boost your business
                </li>
                <li className="text-center text-[15px] p-[10px] ">
                  Priority support
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full rounded-[3px] backface-hidden h-[500px] transition-all duration-[800ms] rotate-y-180  group-hover:rotate-y-0  absolute top-0 left-0 bg-gradient-to-br from-[#7ed56f] to-[#28b485] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
              <div className=" mb-20 text-white">
                <p className="text-[15px] font-sans">Monthly</p>
                <p className="text-[60px] font-thin font-sans">$9.99</p>
              </div>
              <button className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                Get Premium
              </button>
            </div>
          </div>
        </div>
        {/* THIRD CARD */}
        <div className="group perspective-1500 relative h-auto min-[900px]:h-[520px]">
          <div className="w-full rounded-[3px] overflow-hidden backface-hidden bg-white h-auto min-[900px]:h-[520px] transition-all duration-[800ms] ease-in-out group-hover:-rotate-y-180 relative min-[900px]:absolute top-0 left-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {/* CARD PICTURE */}
            <div
              className="h-[230px] "
              style={{
                backgroundImage:
                  "url('/images/premium/premium3.jpg'), linear-gradient(to bottom right, #2998ff, #5643fa)",
                backgroundBlendMode: "screen",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%",
              }}
            ></div>
            {/* CARD HEADING */}
            <h3 className="text-[28px] font-light uppercase text-white absolute top-[120px] right-5 text-right w-[75%]">
              <span className="decoration-clone py-[10px] px-[15px] bg-gradient-to-tr from-[rgba(41,152,255,0.85)] to-[rgba(86,67,250,0.85)]">
                Exclusive Seller
              </span>
            </h3>
            {/* CARD DETAILS */}
            <div className="p-[30px]">
              <ul className="w-[80%] mx-auto">
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Sell unlimited products
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Photography service
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-[#eee]">
                  Marketing support
                </li>
                <li className="text-center text-[15px] p-[10px] ">
                  Get featured in blogs
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full rounded-[3px] backface-hidden h-[500px] transition-all duration-[800ms] rotate-y-180  group-hover:rotate-y-0  absolute top-0 left-0 bg-gradient-to-br from-[#2998ff] to-[#5643fa] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
              <div className=" mb-20 text-white">
                <p className="text-[15px] font-sans">Monthly</p>
                <p className="text-[60px] font-thin font-sans">$29.99</p>
              </div>
              <button className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                Get Elite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
