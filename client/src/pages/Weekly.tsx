import React from "react";
import { motion } from "framer-motion";
import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";
import WeeklyTask from "../components/WeeklyTask";

const Weekly = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <AppNavbar />
      <div className="mt-[80px] w-full flex overflow-hidden">
        <AppSidebar />
        <WeeklyTask />
      </div>
    </motion.div>
  );
};

export default Weekly;
