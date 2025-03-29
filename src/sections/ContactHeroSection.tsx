import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { images } from "../assets/images"; // Assure-toi d’avoir une image contact dans ton dossier

const ContactHeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center px-4 py-20 text-white">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroContact})` }}
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu */}
      <MotionFadeIn className="relative z-20 max-w-3xl mx-auto">
        <Title
          as="h1"
          className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Contactez AVTP111
        </Title>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow">
          Une question ? Un projet ? Remplissez le formulaire ou appelez-nous
          directement. Nous vous répondrons dans les plus brefs délais.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default ContactHeroSection;
