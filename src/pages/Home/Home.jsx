import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchSection />
    </div>
  );
};

export default Home;
