import React from "react";
import HomeAbout1 from "../components/HomeAbout1";
import HomeAbout from "../components/HomeAbout";
import HomeFooter from "../components/HomeFooter";
import HomeMoreStuff from "../components/HomeMoreStuff";
import HomeNavbar from "../components/HomeNavbar";
import { motion } from "framer-motion";
import AboutHero from "../components/AboutHero";

const About = () => {
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
      <AboutHero />
      <HomeAbout />
      <HomeAbout1 />
      <HomeMoreStuff />
      <HomeFooter />
    </motion.div>
  );
};

export default About;
