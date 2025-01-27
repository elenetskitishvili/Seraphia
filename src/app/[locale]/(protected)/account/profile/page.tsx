import UpdateProfileForm from "@/src/components/profile/UpdateProfileForm";

export default async function Profile() {
  return (
    <section className="">
      <div className="pt-10 990px:pt-[90px] pb-10 480px:pb-20 770px:pb-[120px] max-w-[1100px] ">
        <div className="flex flex-col gap-4 px-6 770px:px-10 pb-4">
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor=""
              className="text-sm text-customGray font-bold tracking-tight leading-6"
            >
              Email
            </label>
            <input
              type="email"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* SUBSCRIPTION PLAN */}
          <div className="flex flex-col gap-[5px]">
            <label className="text-sm text-customGray font-bold tracking-tight leading-6">
              Subscription plan
            </label>
            <input
              type="text"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* SUBSCRIPTION EXPIRY */}
          <div className="flex flex-col gap-[5px]">
            <label className="text-sm text-customGray font-bold tracking-tight leading-6">
              Subscription expiry
            </label>
            <input
              type="date"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>

          {/* MAX ITEMS */}
          <div className="flex flex-col gap-[5px]">
            <label className="text-sm text-customGray font-bold tracking-tight leading-6">
              Maximum items you can sell
            </label>
            <input
              type="number"
              disabled
              className="border border-bgBtn py-[15px] px-4 "
            />
          </div>
        </div>
        <UpdateProfileForm />
      </div>
    </section>
  );
}
