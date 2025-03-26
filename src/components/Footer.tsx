import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Bloc 1 : Logo ou nom + description */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-[#f97316]">AVTP111</h2>
          <p className="text-sm text-gray-300">
            Spécialiste en terrassement et aménagement paysager en Auvergne.
          </p>
        </div>

        {/* Bloc 2 : Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f97316]">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-[#f97316]">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#f97316]">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/realisations" className="hover:text-[#f97316]">
                Réalisations
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#f97316]">
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#f97316]">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Bloc 3 : Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f97316]">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl text-[#f97316]" />
              <a
                href="mailto:contactavtp111@gmail.com"
                className="hover:text-[#f97316]"
              >
                contactavtp111@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-xl text-[#f97316]" />
              <a href="tel:0642001023" className="hover:text-[#f97316]">
                06 42 00 10 23
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-xl text-[#f97316]" />
              <a
                href="https://instagram.com/av_tp_111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f97316]"
              >
                @av_tp_111
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} AVTP111 — Tous droits réservés.
        <NavLink
          to="/legal-mentions"
          className="ml-2 underline hover:text-[#f97316]"
        >
          Mentions légales
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
