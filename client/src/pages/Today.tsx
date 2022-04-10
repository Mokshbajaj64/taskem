import React from "react";
import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";
import TodayTask from "../components/TodayTask";

const Today = () => {
  return (
    <div>
      <AppNavbar />
      <div className="mt-[80px] w-full flex overflow-hidden">
        <AppSidebar />
        <TodayTask />
      </div>
    </div>
  );
};

export default Today;
