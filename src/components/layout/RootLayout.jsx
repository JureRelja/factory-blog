import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "../footer/Footer.jsx";
import LargeBanner from "../banners/LargeBanner.jsx";
import { ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="d-flex flex-column gap-4">
      <Header />
      <LargeBanner />
      <div className="wrapper">
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
