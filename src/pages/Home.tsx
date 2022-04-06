import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeFooter from "../components/HomeFooter";
import HomeHero from "../components/HomeHero";
import HomeMoreStuff from "../components/HomeMoreStuff";
import HomeNavbar from "../components/HomeNavbar";
import HomeStuff from "../components/HomeStuff";
import HomeUsage from "../components/HomeUsage";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HomeNavbar />
      <HomeHero />
      <HomeAbout />
      <HomeUsage />
      <HomeStuff />
      <HomeMoreStuff />
      <HomeFooter />
    </div>
  );
};

export default Home;
