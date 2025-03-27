import Title from "../components/Title";
import MotionFadeIn from "../components/MotionFadeIn";

const PresentationSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto text-center">
        <Title as="h2" className="mb-6">
          Une entreprise locale à taille humaine
        </Title>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Créée en janvier 2025, AVTP111 intervient en Auvergne pour vos travaux
          de terrassement, nivellement, tranchées techniques et aménagements
          extérieurs.
          <span className="block mt-3 font-semibold text-[#f97316]">
            Fiabilité, réactivité et travail bien fait sont nos priorités.
          </span>
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default PresentationSection;
