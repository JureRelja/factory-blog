import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

function RootLayout() {
  return (
    <div className="d-flex flex-column gap-4">
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center bg-body wrapper header-banner">
        <p>banner</p>
        <p>940x120</p>
      </div>
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
