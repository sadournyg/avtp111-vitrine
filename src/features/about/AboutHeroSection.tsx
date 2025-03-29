import Title from "../../components/Title";
import MotionFadeIn from "../../components/MotionFadeIn";
import { images } from "../../assets/images";

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center px-4 py-20 text-white">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroAbout})` }}
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

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
