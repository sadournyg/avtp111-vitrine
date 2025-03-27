import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded shadow-md p-6 space-y-4 text-[#1e3a8a]">
      <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>

      <div className="flex items-start gap-3">
        <FaPhoneAlt className="text-[#f97316] mt-1" />
        <div>
          <p className="font-medium">Téléphone</p>
          <p>06 12 34 56 78</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <FaEnvelope className="text-[#f97316] mt-1" />
        <div>
          <p className="font-medium">Email</p>
          <p>contact@avtp111.fr</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <FaMapMarkerAlt className="text-[#f97316] mt-1" />
        <div>
          <p className="font-medium">Localisation</p>
          <p>Auvergne (63 - Puy-de-Dôme)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
