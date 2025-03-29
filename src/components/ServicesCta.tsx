import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const ServicesCta = () => {
  return (
    <section className="bg-white text-[#1e3a8a] py-20 px-4 text-center">
      <MotionFadeIn className="max-w-3xl mx-auto">
        <Title as="h2" className="mb-4 text-3xl font-bold">
          Vous avez trouvé le service qu’il vous faut ?
        </Title>

        <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded" />

        <p className="mb-8 text-base md:text-lg text-gray-700 leading-relaxed">
          Contactez AVTP111 dès aujourd’hui pour discuter de votre projet.
          <br className="hidden md:block" />
          Devis rapide, conseils personnalisés, et intervention en Auvergne.
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

export default ServicesCta;
