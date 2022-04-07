import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeFooter from "../components/HomeFooter";
import HomeHero from "../components/HomeHero";
import HomeMoreStuff from "../components/HomeMoreStuff";
import HomeNavbar from "../components/HomeNavbar";
import HomeStuff from "../components/HomeStuff";
import HomeUsage from "../components/HomeUsage";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="overflow-x-hidden"
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
      <HomeNavbar />
      <HomeHero />
      <HomeAbout />
      <HomeUsage />
      <HomeStuff />
      <HomeMoreStuff />
      <HomeFooter />
    </motion.div>
  );
};

export default Home;
