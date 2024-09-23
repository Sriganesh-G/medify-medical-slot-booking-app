import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";
import OffersSlider from "../../components/OffersSlider/OffersSlider";
import SpecialistSection from "../../components/SpecialistSection/SpecialistSection";
import MedicalSpecialistSlider from "../../components/MedicalSpecialist/MedicalSpecialistSlider";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import Blogs from "../../components/BlogsAndNews/Blogs";
import FamilySection from "../../components/FamilySection/FamilySection";
import FAQSection from "../../components/FAQSection/FAQSection";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import footer from "../../../public/assets/footer.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <OffersSlider />
      <SpecialistSection />
      <MedicalSpecialistSlider />
      <PatientCaring />
      <Blogs />
      <FamilySection />
      <FAQSection />
      <DownloadSection />
      <img src={footer} width="100%" className="footerImage" />
    </div>
  );
};

export default Home;
