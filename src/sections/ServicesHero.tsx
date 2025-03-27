import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { images } from "../assets/images";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center text-center text-white px-4 py-12">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
        style={{ backgroundImage: `url(${images.heroService})` }}
      ></div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Contenu */}
      <MotionFadeIn className="relative z-20 max-w-3xl">
        <Title as="h1" className="text-white mb-4">
          Nos services
        </Title>
        <p className="text-gray-200 text-sm md:text-base">
          Terrassement, tranchées techniques, aménagement extérieur… AVTP111
          intervient avec sérieux et savoir-faire en Auvergne.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default ServicesHero;
