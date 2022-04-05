import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeHero from "../components/HomeHero";
import HomeNavbar from "../components/HomeNavbar";
import HomeUsage from "../components/HomeUsage";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HomeNavbar />
      <HomeHero />
      <HomeAbout />
      <HomeUsage />
    </div>
  );
};

export default Home;
