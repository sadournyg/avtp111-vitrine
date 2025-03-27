// src/sections/AboutValues.tsx
import { FaTools, FaClock, FaUserCheck, FaLeaf } from "react-icons/fa";
import Title from "../components/Title";
import MotionFadeIn from "../components/MotionFadeIn";

const values = [
  {
    icon: <FaTools className="text-3xl text-[#f97316]" />,
    title: "Savoir-faire",
    description: "Expérience, matériel adapté, précision d’exécution.",
  },
  {
    icon: <FaClock className="text-3xl text-[#f97316]" />,
    title: "Réactivité",
    description: "Devis rapide, interventions efficaces.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-[#f97316]" />,
    title: "Sérieux",
    description: "Respect des délais, chantiers propres et suivis.",
  },
  {
    icon: <FaLeaf className="text-3xl text-[#f97316]" />,
    title: "Créativité",
    description: "Aménagements sur-mesure adaptés à vos envies.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <MotionFadeIn className="max-w-6xl mx-auto text-center">
        <Title as="h2" className="mb-10">
          Nos engagements
        </Title>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded p-6 space-y-3 hover:shadow-lg transition"
            >
              <div>{value.icon}</div>
              <h3 className="text-lg font-semibold text-[#1e3a8a]">
                {value.title}
              </h3>
              <p className="text-sm text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default AboutValues;
