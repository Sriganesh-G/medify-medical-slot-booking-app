import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";
import OffersSlider from "../../components/OffersSlider/OffersSlider";
import SpecialistSection from "../../components/SpecialistSection/SpecialistSection";
import MedicalSpecialist from "../../components/MedicalSpecialist/MedicalSpecialist";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <OffersSlider />
      <SpecialistSection />
      <MedicalSpecialist />
    </div>
  );
};

export default Home;
