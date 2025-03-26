import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalMentions from "./pages/LegalMentions";

const App: React.FC = () => {
  return (
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
  );
};

export default App;
