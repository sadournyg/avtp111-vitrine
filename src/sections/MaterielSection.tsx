import { TbBulldozer } from "react-icons/tb";
import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const MaterielSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto text-center">
        <Title as="h2" className="mb-4 text-3xl font-bold">
          Matériel professionnel
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-8 rounded" />

        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-10">
          Nous utilisons du matériel performant, parfaitement adapté aux
          chantiers particuliers comme professionnels.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base max-w-3xl mx-auto text-left">
          {[
            "Mini-pelle 2,5 T avec accessoires",
            "Camion benne 3,5 T pour les évacuations",
            "Laser rotatif pour un nivellement précis",
            "Matériel de compactage (plaque vibrante)",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2  transition-colors"
            >
              <TbBulldozer
                className="mt-1 w-5 h-5 text-orange-500 flex-shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </MotionFadeIn>
    </section>
  );
};

export default MaterielSection;
