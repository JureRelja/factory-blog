import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LargeBanner from "./banners/LargeBanner.jsx";

function RootLayout() {
  return (
    <div className="d-flex flex-column gap-4">
      <Header />
      <LargeBanner />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
