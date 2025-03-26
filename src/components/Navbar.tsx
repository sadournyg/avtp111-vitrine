import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/icons/index";

const navLinks = [
  { path: "/", label: "ACCUEIL" },
  { path: "/services", label: "SERVICES" },
  { path: "/realisations", label: "RÉALISATIONS" },
  { path: "/contact", label: "CONTACT" },
  { path: "/about", label: "À PROPOS" },
];

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  return (
    <header className="bg-[#1e3a8a] sticky top-0 left-0 w-full z-[50] shadow-md">
      <div className="flex justify-between md:justify-around items-center px-4 py-1.5">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          aria-label="Retour à l'accueil"
        >
          <img
            loading="lazy"
            src={assets.logo}
            alt="Logo AVTP111"
            className="cursor-pointer w-16 h-16 object-contain"
          />
          <span className="text-lg font-bold text-white">AVTP111</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-semibold text-white">
            {navLinks.map(({ path, label }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#f97316] font-bold"
                        : "hover:text-[#f97316]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setVisible(true)}
          aria-label="Ouvrir le menu"
          aria-controls="mobile-menu"
          aria-expanded={visible}
          className="w-6 h-6 lg:hidden flex items-center justify-center"
          type="button"
        >
          <img
            loading="lazy"
            src={assets.menu_icon}
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      {/* Overlay */}
      {visible && (
        <div
          tabIndex={-1}
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40 transition-opacity duration-300"
          aria-hidden="true"
          onClick={() => setVisible(false)}
        ></div>
      )}

      {/* Menu mobile */}
      <nav
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full z-50 transition-transform duration-300 ease-in-out 
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} 
        w-4/5 sm:w-1/2 max-w-[320px] bg-[#1e3a8a] shadow-xl border-l border-gray-300 flex flex-col text-white`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setVisible(false)}
            aria-label="Fermer le menu"
            className="flex items-center gap-2 text-white font-medium border border-gray-300 rounded px-3 py-1 transition"
            type="button"
          >
            <img
              loading="lazy"
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt=""
              aria-hidden="true"
            />
            Fermer
          </button>
        </div>

        <ul className="flex-grow flex flex-col justify-center gap-6 px-6 text-lg font-semibold text-white">
          {navLinks.map(({ path, label }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `block py-2 transition ${
                    isActive
                      ? "text-[#f97316] font-bold"
                      : "hover:text-[#f97316]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
