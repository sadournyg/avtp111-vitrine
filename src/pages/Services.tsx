import ServicesCta from "../components/ServicesCta";
import AmenagementSection from "../sections/AmenagementSection";
import MaterielSection from "../sections/MaterielSection";
import ServicesHero from "../sections/ServicesHero";
import TerrassementSection from "../sections/TerrassementSection";
import TrancheesSection from "../sections/TrancheeSection";

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
