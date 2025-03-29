import { TbBulldozer } from "react-icons/tb";
import MotionFadeIn from "../../components/MotionFadeIn";
import Title from "../../components/Title";

const TerrassementSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto text-center">
        <Title as="h2" className="mb-4 text-3xl font-bold">
          Terrassement
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-8 rounded" />

        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-3xl mx-auto">
          AVTP111 intervient pour tous vos travaux de terrassement, avec
          précision et efficacité, que ce soit pour un projet neuf ou une
          rénovation extérieure.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base max-w-3xl mx-auto text-left">
          {[
            "Mise à niveau de terrain",
            "Création de chemins d’accès",
            "Préparation de plateforme ou fondations",
            "Empierrement / compactage",
          ].map((item, index) => (
            <li key={index} className="flex items-start  gap-2">
              <TbBulldozer className="mt-1 flex-shrink-0 w-5 h-5 text-orange-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </MotionFadeIn>
    </section>
  );
};

export default TerrassementSection;
