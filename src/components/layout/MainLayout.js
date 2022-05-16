import React from "react";
import Header from "../headerComponents/Header";
import Sidebar from "../sideBarComponents/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen max-h-screen min-w-full  overflow-hidden">
      {/* sidbar  */}
      <Sidebar />
      <div className="flex w-full flex-col bg-theme_background overflow-hidden ">
        {/* Header */}
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
