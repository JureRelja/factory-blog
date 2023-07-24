import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../banners/Banner";
import { ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="d-flex flex-column gap-4">
      <Header />
      <Banner size="lg" />
      <div className="wrapper">
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
