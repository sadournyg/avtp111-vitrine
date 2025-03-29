import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MotionFadeIn from "../../components/MotionFadeIn";
import Title from "../../components/Title";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-[#1e3a8a]">
      <MotionFadeIn className="max-w-6xl mx-auto">
        <Title as="h2" className="text-center mb-4 text-3xl font-bold">
          Prenez contact avec nous
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-12 rounded" />

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </MotionFadeIn>
    </section>
  );
};

export default ContactSection;
