import React from "react";
import { motion } from "framer-motion";
import HomeNavbar from "../components/HomeNavbar";
import FeaturesHero from "../components/FeaturesHero";
import HomeFooter from "../components/HomeFooter";
import FeaturesComponent1 from "../components/FeaturesComponent1";

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
      <HomeFooter />
    </motion.div>
  );
};

export default Features;
