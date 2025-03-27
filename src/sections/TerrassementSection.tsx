import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const TerrassementSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto">
        <Title as="h2" className="mb-6">
          Terrassement
        </Title>

        <p className="text-gray-700 text-sm md:text-base mb-6 max-w-3xl mx-auto text-center">
          AVTP111 intervient pour tous vos travaux de terrassement, avec
          précision et efficacité, que ce soit pour un projet neuf ou une
          rénovation extérieure.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm md:text-base max-w-2xl mx-auto">
          <li>Mise à niveau de terrain</li>
          <li>Création de chemins d’accès</li>
          <li>Préparation de plateforme ou fondations</li>
          <li>Empierrement / compactage</li>
        </ul>
      </MotionFadeIn>
    </section>
  );
};

export default TerrassementSection;
