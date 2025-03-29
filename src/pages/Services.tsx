import ServicesCta from "../components/ServicesCta";
import AmenagementSection from "../features/services/AmenagementSection";
import MaterielSection from "../features/services/MaterielSection";
import ServicesHero from "../features/services/ServicesHero";
import TerrassementSection from "../features/services/TerrassementSection";
import TrancheesSection from "../features/services/TrancheeSection";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <TerrassementSection />
      <TrancheesSection />
      <AmenagementSection />
      <MaterielSection />
      <ServicesCta />
    </>
  );
};

export default Services;
