import { Link } from "react-router-dom";
import MotionFadeIn from "../../components/MotionFadeIn";
import Title from "../../components/Title";
import { images } from "../../assets/images";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-76px)] flex flex-col justify-between text-center text-white px-4 py-8">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenu principal centré */}
      <div className="relative z-20 flex-1 flex items-center justify-center">
        <MotionFadeIn className="max-w-2xl">
          <Title
            as="h1"
            className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Terrassement & Aménagement Paysager
          </Title>

          <p className="max-w-xl text-base md:text-lg text-gray-200 mb-8 leading-relaxed drop-shadow">
            Basé en Auvergne, AVTP111 vous accompagne dans vos travaux
            extérieurs avec expertise et passion.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-8 rounded-xl shadow transition"
          >
            Demander un devis
          </Link>
        </MotionFadeIn>
      </div>

      {/* Chevron scroll bas */}
      <a
        href="#about"
        aria-label="Scroll vers la section suivante"
        className="relative z-20 mb-4 self-center animate-bounce"
      >
        <FaChevronDown
          size={28}
          className="text-white opacity-80 hover:opacity-100 transition"
        />
      </a>
    </section>
  );
};

export default HeroSection;
