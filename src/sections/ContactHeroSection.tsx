import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const ContactHeroSection = () => {
  return (
    <section className="bg-[#1e3a8a] text-white py-16 px-4 text-center">
      <MotionFadeIn className="max-w-3xl mx-auto">
        <Title as="h1" className="mb-4 text-white">
          Contactez AVTP111
        </Title>
        <p className="text-sm md:text-base text-gray-200">
          Une question ? Un projet ? Remplissez le formulaire ou appelez-nous
          directement. Nous vous répondrons dans les plus brefs délais.
        </p>
      </MotionFadeIn>
    </section>
  );
};

export default ContactHeroSection;
