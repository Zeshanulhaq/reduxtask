import React from "react";
import Appbar from "../Appbar";
import AppSidebar from "../AppSidebar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Appbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AppSidebar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
