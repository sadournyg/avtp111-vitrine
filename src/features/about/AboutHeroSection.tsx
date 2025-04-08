import Title from "../../components/Title";
import MotionFadeIn from "../../components/MotionFadeIn";
import { images } from "../../assets/images";

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center text-center px-4 py-20 text-white">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroAbout})` }}
      />
      {/* Overlay sombre */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/40 md:to-black/20"
        aria-hidden="true"
      />

      {/* Contenu */}
      <MotionFadeIn className="relative z-20 max-w-3xl mx-auto">
        <Title
          as="h1"
          className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          À propos de AVTP111
        </Title>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
          Spécialiste en terrassement et aménagement paysager en Auvergne.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default AboutHeroSection;
