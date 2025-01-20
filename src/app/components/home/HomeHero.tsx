import HomeHeroContent from "./HomeHeroContent";
import HeroMarquee from "./HeroMarquee";

export default function HomeHero() {
  return (
    <section className="bg-bgLight grid grid-cols-1 min-[990px]:grid-cols-2 min-[990px]:items-center ">
      <HomeHeroContent />
      <HeroMarquee />
    </section>
  );
}
