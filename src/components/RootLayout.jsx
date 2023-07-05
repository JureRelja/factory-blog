import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function RootLayout() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
