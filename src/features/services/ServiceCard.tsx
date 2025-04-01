// src/components/ServiceCard.tsx

import { Service } from "../../types/Service";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white shadow-md rounded p-6 text-center hover:shadow-lg transition">
      <service.icon className="text-4xl text-[#f97316] mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
