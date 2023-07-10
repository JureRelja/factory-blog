import React from "react";
import SidebarArticles from "./SidebarArticles.jsx";
import SidebarSocial from "./SidebarSocial.jsx";

function Sidebar() {
  return (
    <div className="d-flex flex-column gap-4 sidebar-wrapper">
      <SidebarArticles />
      <SidebarSocial />
    </div>
  );
}

export default Sidebar;
