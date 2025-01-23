import HomeHero from "@/src/app/components/home/HomeHero";
import PremiumCTA from "../components/premium/PremiumCTA";
export default function Home() {
  return (
    <>
      <HomeHero />
      <section className=" px-6 770px:px-10 pt-[60px] 480px:pt-20 770px:pt-[120px] 990px:pt-[160px] pb-10 770px:pb-[60px] 990px:pb-20 ">
        <h2 className="text-[28px] 480px:text-[36px] 990px:text-[64px] 770px:text-5xl text-center font-bold tracking-tighter max-w-[1060px] mx-auto leading-none">
          Shopverse is a jewelry platform to shop, sell, and explore blogs &
          stories.
        </h2>
      </section>
      <section></section>
      <PremiumCTA />
    </>
  );
}
