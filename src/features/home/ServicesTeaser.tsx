import { Link } from "react-router-dom";
import { services } from "../../data/services";
import Title from "../../components/Title";
import ServiceCard from "../services/ServiceCard";
import MotionFadeIn from "../../components/MotionFadeIn";

const ServicesTeaser = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-6xl mx-auto text-center">
        <Title as="h2" className="mb-4 text-3xl font-bold">
          Nos services
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-10 rounded" />

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-8 rounded-xl shadow transition"
          >
            Voir tous les services
          </Link>
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default ServicesTeaser;
