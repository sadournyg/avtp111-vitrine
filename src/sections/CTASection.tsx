import { Link } from "react-router-dom";
import Title from "../components/Title";
import MotionFadeIn from "../components/MotionFadeIn";

const CtaSection = () => {
  return (
    <section className="bg-white text-[#1e3a8a] py-12 px-4 text-center">
      <MotionFadeIn>
        <Title as="h2" className="mb-4">
          Un projet en tête ?
        </Title>
        <p className="mb-6 text-sm md:text-base text-gray-700">
          Contactez-nous pour discuter de votre chantier et obtenir un devis
          rapide.
        </p>
        <Link
          to="/contact"
          className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold py-2 px-6 rounded transition"
        >
          Contactez-nous
        </Link>
      </MotionFadeIn>
    </section>
  );
};

export default CtaSection;
