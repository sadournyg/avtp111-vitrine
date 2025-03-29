import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white pt-16 px-4">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 border-b border-white/20 pb-12">
        {/* Bloc 1 : Logo / Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">AVTP111</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Spécialiste en terrassement et aménagement paysager en Auvergne.
            Nous vous accompagnons avec sérieux, précision et savoir-faire.
          </p>
        </div>

        {/* Bloc 2 : Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/realisations", label: "Réalisations" },
              { to: "/about", label: "À propos" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="hover:text-orange-400 transition">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc 3 : Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex items-center gap-3">
              <MdEmail className="text-xl text-orange-500" />
              <a
                href="mailto:contactavtp111@gmail.com"
                className="hover:text-orange-400 transition"
              >
                contactavtp111@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-xl text-orange-500" />
              <a
                href="tel:0642001023"
                className="hover:text-orange-400 transition"
              >
                06 42 00 10 23
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-xl text-orange-500" />
              <a
                href="https://instagram.com/av_tp_111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                @av_tp_111
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="text-center text-xs text-gray-400 mt-8 pb-6">
        &copy; {new Date().getFullYear()} AVTP111 — Tous droits réservés.
        <NavLink
          to="/legal-mentions"
          className="ml-2 underline hover:text-orange-400"
        >
          Mentions légales
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
