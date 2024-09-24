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
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [statesData, setStatesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Initialize useNavigate to send data to SearchResultsPage from here
  const navigate = useNavigate();

  // making API calls to get data of State
  /*   useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStatesData(response.data);
        console.log(statesData);
        // Store the fetched state data in localStorage
        if (response.data.length > 0) {
          localStorage.setItem("statesData", JSON.stringify(response.data));
          console.log(localStorage.getItem("stateData"));
        }
      } catch (e) {
        console.error("Error fetching states", e.message);
      }
    };

    fetchState();
  }, []); */
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );

        // Set the fetched data to the state
        setStatesData(response.data);
        console.log(response.data);

        // Directly store the response data in localStorage
        if (response.data.length > 0) {
          localStorage.setItem("statesData", JSON.stringify(response.data));

          // Retrieve and log the data from localStorage to confirm it's saved
          console.log(
            "Stored in localStorage:",
            localStorage.getItem("statesData")
          );
        }
      } catch (e) {
        console.error("Error fetching states", e.message);
      }
    };

    fetchState();
  }, []); // Removed selectedState as a dependency, this fetch should only run once

  // Fetch cities whenever a state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/cities/${selectedState}` // Dynamically add selectedState to the URL
          );
          setCitiesData(response.data);

          // storing the cities data in local storage
          if (response.data.length > 0) {
            localStorage.setItem(
              `citiesData-${selectedState}`.JSON.stringify(response.data)
            );
            console.log(
              "Cities stored in localStorage:",
              localStorage.getItem(`citiesData-${selectedState}`)
            );
          }
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

  // handles when search buttons is clicked
  const handleSearch = () => {
    navigate("/search", {
      state: {
        statesData,
        citiesData,
        selectedState,
        selectedCity,
      },
    });
  };
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
        onSearch={handleSearch}
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
