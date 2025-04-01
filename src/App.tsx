import React from "react";
import { Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalMentions from "./pages/LegalMentions";

const App: React.FC = () => {
  useScrollToTop();
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-yellow-400 text-black text-center py-2 z-50 text-sm shadow-md">
        ⚠️ Version de démonstration – ne pas diffuser ce lien
      </div>
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="realisations" element={<Realisations />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal-mentions" element={<LegalMentions />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
