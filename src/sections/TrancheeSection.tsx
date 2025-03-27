import MotionFadeIn from "../components/MotionFadeIn";
import Title from "../components/Title";

const TrancheesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-5xl mx-auto">
        <Title as="h2" className="mb-6">
          Tranchées techniques
        </Title>

        <p className="text-gray-700 text-sm md:text-base mb-6 max-w-3xl mx-auto text-center">
          Nous réalisons des tranchées pour le passage de réseaux divers, en
          respectant les normes de profondeur et de sécurité.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm md:text-base max-w-2xl mx-auto">
          <li>
            Ouverture de tranchées pour raccordements (eau, électricité,
            télécom…)
          </li>
          <li>Passage de gaines et canalisations</li>
          <li>Remblaiement soigné et compacté</li>
        </ul>
      </MotionFadeIn>
    </section>
  );
};

export default TrancheesSection;
