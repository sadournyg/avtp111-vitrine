import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { images } from "../assets/images";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-center justify-center text-center px-4 py-20 text-white">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroService})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu */}
      <MotionFadeIn className="relative z-20 max-w-3xl mx-auto">
        <Title
          as="h1"
          className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Nos services
        </Title>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed drop-shadow-sm">
          Terrassement, tranchées techniques, aménagement extérieur…
          <br className="hidden md:block" />
          AVTP111 intervient avec sérieux et savoir-faire en Auvergne.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default ServicesHero;
