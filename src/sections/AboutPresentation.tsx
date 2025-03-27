// src/sections/AboutPresentation.tsx
import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const AboutPresentation = () => {
  return (
    <section className="py-16 px-4 bg-white text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto text-center">
        <Title as="h2" className="mb-6">
          Une entreprise de confiance, proche de ses clients
        </Title>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          AVTP111 transforme vos projets extérieurs en réalité. Basée en
          Auvergne, notre entreprise met son savoir-faire au service de vos
          travaux de terrassement, tranchées, nivellement et aménagements
          paysagers.
          <br />
          <span className="block mt-3 font-semibold text-[#f97316]">
            Qualité, réactivité et proximité sont au cœur de notre engagement.
          </span>
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default AboutPresentation;
