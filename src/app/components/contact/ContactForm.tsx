export default function ContactForm() {
  return (
    <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
      <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
        <p className="text-lg text-customGray font-bold tracking-tight leading-6 max-w-[300px]">
          The support team is active everyday from 8am to 8pm, so you can always
          email or call us.
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-4">
          {/* NAME */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            />
          </div>
          {/* SUBJECT */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="options"
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Subject
            </label>
            <select
              id="options"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="option1">Information request</option>
              <option value="option2">Shipping or refund</option>
              <option value="option3">Premium membership</option>
              <option value="option3">other</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Message
            </label>
            <textarea
              placeholder="Enter a message"
              className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="480px:self-end">
            <button className="w-full 480px:w-auto 480px:px-[50px]    text-customBlue bg-bgMedium font-medium py-3  rounded-full inline-block hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 ">
              <span className="mr-1">Send message</span>
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
