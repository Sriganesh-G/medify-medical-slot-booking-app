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
  const [hospitalDetails, setHospitalDetails] = useState([]);

  // Initialize useNavigate to send data to SearchResultsPage from here
  const navigate = useNavigate();

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );

        // Set the fetched data to the state
        setStatesData(response.data);

        // Directly store the response data in localStorage
        if (response.data.length > 0) {
          localStorage.setItem("statesData", JSON.stringify(response.data));

          // Retrieve and log the data from localStorage to confirm it's saved
          /*    console.log(
            "Stored in localStorage:",
            localStorage.getItem("statesData")
          ); */
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
            /*  console.log(
              "Cities stored in localStorage:",
              localStorage.getItem(`citiesData-${selectedState}`)
            ); */
          }
        } catch (e) {
          console.log("Error fetching cities:", e);
        }
      }
    };
    fetchCities();
  }, [selectedState]); // Trigger whenever selectedState changes

  // fetch hospital details
  // Fetch hospital details
  /*   useEffect(() => {
    const fetchHospitalDetails = async () => {
      // Only fetch if both selectedState and selectedCity are not empty
      if (selectedState && selectedCity) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
          );

          // Log the API response before setting the state
          //    console.log("API Response:", response.data);

          setHospitalDetails(response.data);
        } catch (e) {
          console.log("Error fetching hospital details:", e);
        }
      } else {
        console.log("State or city not selected.");
      }
    };

    fetchHospitalDetails();
  }, [selectedState, selectedCity]); // Trigger when selectedState or selectedCity changes */

  useEffect(() => {
    if (selectedState && selectedCity) {
      console.log(hospitalDetails);
    }
  }, [selectedState, selectedCity]);

  // This will log hospital details if there are any
  useEffect(() => {
    if (hospitalDetails.length > 0) {
      console.log("Hospitals details from home ", hospitalDetails);
    } else {
      console.log("No hospital details found.");
    }
  }, [hospitalDetails]); // Monitor hospitalDetails for changes

  // handles when search buttons is clicked
  const handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate("/search", {
        state: {
          statesData, // All state data
          citiesData, // All city data
          selectedState, // Selected state
          selectedCity, // Selected city
        },
      });
    } else {
      alert("Please select both state and city to continue.");
    }
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
        hospitalDetails={hospitalDetails}
        setHospitalDetails={setHospitalDetails}
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
