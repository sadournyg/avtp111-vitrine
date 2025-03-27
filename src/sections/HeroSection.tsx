import { Link } from "react-router-dom";
import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { images } from "../assets/images/index";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center text-center text-white px-4 py-12">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <MotionFadeIn className="relative z-20 max-w-2xl">
        <Title as="h1" className="text-white mb-4">
          Terrassement & Aménagement Paysager
        </Title>
        <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6">
          Basé en Auvergne, AVTP111 vous accompagne dans vos travaux extérieurs
          avec expertise et passion.
        </p>
        <Link
          to="/contact"
          className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold py-2 px-6 rounded transition"
        >
          Demander un devis
        </Link>
      </MotionFadeIn>
    </section>
  );
};

export default HeroSection;
