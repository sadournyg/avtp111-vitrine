import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-6 text-[#1e3a8a]">
      <h3 className="text-xl font-semibold mb-2">Informations de contact</h3>

      <div className="space-y-4 text-sm md:text-base text-gray-700">
        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-orange-500 mt-1" />
          <div>
            <p className="font-medium">Téléphone</p>
            <p>06 12 34 56 78</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-orange-500 mt-1" />
          <div>
            <p className="font-medium">Email</p>
            <p>contact@avtp111.fr</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-orange-500 mt-1" />
          <div>
            <p className="font-medium">Localisation</p>
            <p>Auvergne (63 - Puy-de-Dôme)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
