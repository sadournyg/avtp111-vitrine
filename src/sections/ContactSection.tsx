import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import MotionFadeIn from "../components/MotionFadeIn";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <MotionFadeIn className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </MotionFadeIn>
    </section>
  );
};

export default ContactSection;
