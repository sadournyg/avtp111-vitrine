// src/sections/AboutHeroSection.tsx
import Title from "../components/Title";
import MotionFadeIn from "../components/MotionFadeIn";

const AboutHeroSection = () => {
  return (
    <section className="bg-[#1e3a8a] text-white text-center py-20 px-4">
      <MotionFadeIn className="max-w-3xl mx-auto">
        <Title as="h1" className="mb-4">
          À propos de AVTP111
        </Title>
        <p className="text-base md:text-lg text-gray-200">
          Spécialiste en terrassement et aménagement paysager en Auvergne.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default AboutHeroSection;
