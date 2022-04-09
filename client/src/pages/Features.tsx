import React from "react";
import { motion } from "framer-motion";
import HomeNavbar from "../components/HomeNavbar";
import FeaturesHero from "../components/FeaturesHero";
import HomeFooter from "../components/HomeFooter";
import FeaturesComponent1 from "../components/FeaturesComponent1";
import FeaturesComponent2 from "../components/FeaturesComponent2";
import HomeMoreStuff from "../components/HomeMoreStuff";

const Features = () => {
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
      <FeaturesHero />
      <FeaturesComponent1 />
      <FeaturesComponent2 />
      <HomeMoreStuff />
      <HomeFooter />
    </motion.div>
  );
};

export default Features;
