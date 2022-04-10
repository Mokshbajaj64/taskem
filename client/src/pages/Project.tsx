import React from "react";
import AppNavbar from "../components/AppNavbar";
import AppSidebar from "../components/AppSidebar";
import { motion } from "framer-motion";
import ProjectTask from "../components/ProjectTask";

const Project = () => {
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
        <ProjectTask />
      </div>
    </motion.div>
  );
};

export default Project;
