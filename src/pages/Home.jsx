import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderPostSlider from "../components/HeaderPostSlider/HeaderPostSlider";

function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      {/* Post slider in the header */}
      <HeaderPostSlider />

      {/* Categories and sidebar */}
      <div className="d-flex justify-content-between gap-4">
        <div>Homepage</div>
        <Sidebar />
      </div>

      {/* Image slider in the bottom */}
    </div>
  );
}

export default Home;
