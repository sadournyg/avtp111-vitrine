import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { images } from "../assets/images/index";

const RealisationsHero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center text-white px-4 py-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroRealisations})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <MotionFadeIn className="relative z-20 max-w-3xl">
        <Title as="h1" className="text-white mb-4">
          Nos Réalisations
        </Title>
        <p className="text-sm md:text-base text-gray-200">
          Découvrez en images notre savoir-faire : terrassement, tranchées
          techniques et aménagements extérieurs.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default RealisationsHero;
