import MotionFadeIn from "../../components/MotionFadeIn";
import Title from "../../components/Title";
import { images } from "../../assets/images";

const RealisationsHero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center text-white px-4 py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroRealisations})` }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <MotionFadeIn className="relative z-20 max-w-3xl mx-auto">
        <Title
          as="h1"
          className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Nos Réalisations
        </Title>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
          Découvrez en images notre savoir-faire : terrassement, tranchées
          techniques et aménagements extérieurs.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default RealisationsHero;
