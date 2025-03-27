import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const ServicesCta = () => {
  return (
    <section className="bg-white text-[#1e3a8a] py-16 px-4 text-center">
      <MotionFadeIn className="max-w-3xl mx-auto">
        <Title as="h2" className="mb-4">
          Vous avez trouvé le service qu’il vous faut ?
        </Title>

        <p className="mb-6 text-sm md:text-base text-gray-700">
          Contactez AVTP111 dès aujourd’hui pour discuter de votre projet. Devis
          rapide, conseils personnalisés, et intervention en Auvergne.
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

export default ServicesCta;
