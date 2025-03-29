import { Link } from "react-router-dom";
import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { images } from "../assets/images";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-center text-white px-4 py-20">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu */}
      <MotionFadeIn className="relative z-20 max-w-2xl">
        <Title
          as="h1"
          className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Terrassement & Aménagement Paysager
        </Title>

        <p className="max-w-xl text-base md:text-lg text-gray-200 mb-8 leading-relaxed drop-shadow">
          Basé en Auvergne, AVTP111 vous accompagne dans vos travaux extérieurs
          avec expertise et passion.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-8 rounded-xl shadow transition"
        >
          Demander un devis
        </Link>
      </MotionFadeIn>
    </section>
  );
};

export default HeroSection;
