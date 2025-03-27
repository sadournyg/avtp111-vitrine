import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const MaterielSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto text-center">
        <Title as="h2" className="mb-6">
          Matériel professionnel
        </Title>

        <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-6">
          Nous utilisons du matériel performant, parfaitement adapté aux
          chantiers particuliers comme professionnels.
        </p>

        <ul className="list-disc text-left pl-6 text-gray-700 space-y-2 text-sm md:text-base max-w-md mx-auto">
          <li>Mini-pelle 2,5 T avec accessoires</li>
          <li>Camion benne 3,5 T pour les évacuations</li>
          <li>Laser rotatif pour un nivellement précis</li>
          <li>Matériel de compactage (plaque vibrante)</li>
        </ul>
      </MotionFadeIn>
    </section>
  );
};

export default MaterielSection;
