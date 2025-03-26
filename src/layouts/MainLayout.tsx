import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
