import { Link } from "react-router-dom";
import { services } from "../data/services";
import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import MotionFadeIn from "../components/MotionFadeIn";

const ServicesTeaser = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <MotionFadeIn className="max-w-6xl mx-auto text-center">
        <Title as="h2" className="mb-10">
          Nos services
        </Title>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="text-[#f97316] hover:underline font-semibold"
          >
            Voir tous les services
          </Link>
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default ServicesTeaser;
