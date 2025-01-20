import HeroContent from "./HeroContent";
import HeroMarquee from "./HeroMarquee";

export default function hero() {
  return (
    <section className="bg-bgLight grid grid-cols-1 min-[990px]:grid-cols-2 min-[990px]:items-center ">
      <HeroContent />
      <HeroMarquee />
    </section>
  );
}
