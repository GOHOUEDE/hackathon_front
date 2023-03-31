import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

const DefaultLayout = () => {
  return (
    <div className="default-layout-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
