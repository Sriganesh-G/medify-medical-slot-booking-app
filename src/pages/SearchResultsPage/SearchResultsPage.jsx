import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import CitiesInputBar from "../../components/SearchBar/CitiesInputBar";
import Buttons from "../../components/Buttons/Buttons";
import "./SearchResultsPage.css";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import FAQSection from "../../components/FAQSection/FAQSection";
import DownloadSection from "../../components/DownloadSection/DownloadSection";
import Footer from "../../components/FooterComponent/Footer";
import freeAppointment from "../../../public/assets/images/freeAppointment.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const SearchResultsPage = () => {
  const location = useLocation();

  const {
    statesData,
    citiesData,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    hospitalDetails = [],
  } = location.state || {};

  useEffect(() => {
    console.log(hospitalDetails);
  }, [hospitalDetails]);

  return (
    <div>
      <div className="navbar">
        <Navbar />
        <div className="navbarBelowSection"></div>
      </div>

      {/* Search input section */}
      <div className="searchPart">
        <SearchBar
          value="State"
          statesData={statesData}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          isDisabled={false}
        />
        <CitiesInputBar
          value="City"
          citiesData={citiesData}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          isDisabled={!selectedState}
        />
        <Buttons value="Search" />
      </div>

      <div className="searchResultSection">
        <div className="resultInfo">
          <h6>{`${hospitalDetails.length} medical centers available in ${selectedState}`}</h6>
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        <Grid container spacing={5}>
          <Grid item xs={8}>
            <Box>
              {/* Pass individual hospital details to HospitalCard */}
              {/*    {hospitalDetails.map((details, idx) => (
                <HospitalCard
                  key={idx}
                  hospitalDetails={details} // Now this is correct, passing each individual hospital object
                />
              ))} */}
              {hospitalDetails.length > 0 &&
                hospitalDetails.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    hospitalDetails={hospital}
                  />
                ))}
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <img src={freeAppointment} alt="freeAppointment" />
            </Box>
          </Grid>
        </Grid>
      </div>

      <FAQSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
