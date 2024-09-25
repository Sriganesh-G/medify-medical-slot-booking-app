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
  //useLocation is used to retrieve any data that has been passed through the navigate function when transitioning between components.
  const location = useLocation(); // This line calls the useLocation hook, which returns the current location object. You can now access various properties of the location, such as location.pathname for the current URL path.

  /*Here in the above, we are destructuring properties from location.state.
    location.state: This property contains the state object that was passed when you navigated to this component 
    (in our case, it contains statesData, citiesData, selectedState, and selectedCity).
    The || {} part is a fallback to prevent errors if location.state is undefined.
     If location.state is undefined, it will default to an empty object, meaning the destructuring will result in 
     undefined values for all four variables. */
  const {
    statesData,
    citiesData,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    hospitalDetails,
  } = location.state || {};

  useEffect(() => {
    console.log(hospitalDetails);
  }, []);
  return (
    <div>
      <div className="navbar">
        <Navbar />
        <div className="navbarBelowSection"></div>
      </div>
      {/* search input section */}
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
        <Buttons /* onClick={handleClick} */ icon={true} value="Search" />
      </div>
      <div className="searchResultSection">
        <div className="resultInfo">
          <h6>{`${hospitalDetails.length} medical centers available in ${selectedState}`}</h6>
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        <Grid container spacing={5}>
          <Grid size={8}>
            <Box>
              <HospitalCard
                statesData={statesData}
                citiesData={citiesData}
                selectedState={selectedState}
                selectedCity={selectedCity}
                hospitalDetails={hospitalDetails}
              />
            </Box>
          </Grid>
          <Grid size={4}>
            <Box>
              {" "}
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
