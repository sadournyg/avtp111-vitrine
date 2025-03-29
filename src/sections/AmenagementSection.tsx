import { TbBulldozer } from "react-icons/tb";
import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const AmenagementSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto text-center">
        <Title as="h2" className="mb-4 text-3xl font-bold">
          Aménagement paysager
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-8 rounded" />

        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-3xl mx-auto">
          Pour sublimer vos extérieurs, nous vous accompagnons dans la création
          d’allées, cours, bordures et travaux paysagers durables.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base max-w-3xl mx-auto text-left">
          {[
            "Création d’allées, cours et parkings",
            "Pose de gravier, empierrement, enrobé à froid",
            "Travaux de finition : bordures, nivellement, semis",
            "Enrochements & terre végétale",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 transition-colors"
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

export default AmenagementSection;
