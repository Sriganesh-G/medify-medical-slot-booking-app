import React, { useEffect } from "react";
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
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // making API calls to get data of State and Cities
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStatesData(response.data);
      } catch (e) {
        console.error("Error fetching states", e.message);
      }
    };

    fetchState();
  }, [selectedState]);

  // Fetch cities whenever a state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/cities/${selectedState}` // Dynamically add selectedState to the URL
          );
          setCitiesData(response.data);
          console.log("Fetched cities data:", response.data);
        } catch (e) {
          console.log("Error fetching cities:", e);
        }
      }
    };
    fetchCities();
  }, [selectedState]); // Trigger whenever selectedState changes

  useEffect(() => {
    if (selectedState) {
      console.log("Selected state from Home component:", selectedState);
    }
  }, [selectedState]); // Add selectedState as a dependency

  useEffect(() => {
    if (citiesData.length > 0) {
      console.log("Selected cities from Home component:", citiesData);
    }
  }, [citiesData]); // Add selectedState as a dependency

  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchSection
        statesData={statesData}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        citiesData={citiesData}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
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
