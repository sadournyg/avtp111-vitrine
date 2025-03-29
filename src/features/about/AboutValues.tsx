import { FaTools, FaClock, FaUserCheck, FaLeaf } from "react-icons/fa";
import Title from "../../components/Title";
import MotionFadeIn from "../../components/MotionFadeIn";

const values = [
  {
    icon: <FaTools className="text-4xl text-orange-500" />,
    title: "Savoir-faire",
    description: "Expérience, matériel adapté, précision d’exécution.",
  },
  {
    icon: <FaClock className="text-4xl text-orange-500" />,
    title: "Réactivité",
    description: "Devis rapide, interventions efficaces.",
  },
  {
    icon: <FaUserCheck className="text-4xl text-orange-500" />,
    title: "Sérieux",
    description: "Respect des délais, chantiers propres et suivis.",
  },
  {
    icon: <FaLeaf className="text-4xl text-orange-500" />,
    title: "Créativité",
    description: "Aménagements sur-mesure adaptés à vos envies.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-6xl mx-auto text-center">
        <Title as="h2" className="mb-4 text-3xl  font-bold">
          Nos engagements
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-10 rounded" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 space-y-3 hover:shadow-lg transition duration-300"
            >
              <div className="mb-2">{value.icon}</div>
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default AboutValues;
