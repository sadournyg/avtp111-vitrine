import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const AmenagementSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto">
        <Title as="h2" className="mb-6">
          Aménagement paysager
        </Title>

        <p className="text-gray-700 text-sm md:text-base mb-6 max-w-3xl mx-auto text-center">
          Pour sublimer vos extérieurs, nous vous accompagnons dans la création
          d’allées, cours, bordures et travaux paysagers durables.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm md:text-base max-w-2xl mx-auto">
          <li>Création d’allées, cours et parkings</li>
          <li>Pose de gravier, empierrement, enrobé à froid</li>
          <li>Travaux de finition : bordures, nivellement, semis</li>
          <li>Enrochements & terre végétale</li>
        </ul>
      </MotionFadeIn>
    </section>
  );
};

export default AmenagementSection;
