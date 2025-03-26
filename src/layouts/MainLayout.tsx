import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
