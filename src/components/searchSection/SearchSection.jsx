import React, { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import SearchBar from "../SearchBar/SearchBar";
import Buttons from "../Buttons/Buttons";
import DoctorsImage from "../../../public/assets/images/specialistImage/Doctor.png";
import LabsImage from "../../../public/assets/images/specialistImage/Drugstore.png";
import HospitalImage from "../../../public/assets/images/specialistImage/Hospital.png";
import CapsuleImage from "../../../public/assets/images/specialistImage/Capsule.png";
import AmbulanceImage from "../../../public/assets/images/specialistImage/Ambulance.png";
import "./SearchSection.css";
import CitiesInputBar from "../SearchBar/CitiesInputBar";

const SearchSection = ({
  statesData,
  selectedState,
  setSelectedState,
  citiesData,
  selectedCity,
  setSelectedCity,
}) => {
  // Destructure props correctly

  return (
    <div className="searchSection">
      <div className="upperSearchSection">
        {/* First SearchBar for State */}
        <SearchBar
          value="State"
          statesData={statesData}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
        {/* Second SearchBar for City (dependent on state selection) */}
        <CitiesInputBar
          value="City"
          citiesData={citiesData}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          isDisabled={!selectedState}
        />
        <Buttons value="Search" />
      </div>
      <div className="lowerSearchSection">
        <h4 className="lowText">You may be looking for</h4>
        <div className="imageContainer">
          <div className="lowerImages">
            <img src={DoctorsImage} alt="Doctors" />
            <p>Doctors</p>
          </div>
          <div className="lowerImages">
            <img src={LabsImage} alt="Hospital" />
            <p>Labs</p>
          </div>
          <div id="hospitalImage">
            <img src={HospitalImage} alt="Doctors" />
            <p>Hospitals</p>
          </div>
          <div className="lowerImages">
            <img src={CapsuleImage} alt="Medical Store" />
            <p>Medical Store</p>
          </div>
          <div className="lowerImages">
            <img src={AmbulanceImage} alt="Ambulance" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
SearchSection.propTypes = {
  statesData: PropTypes.array.isRequired,
  selectedState: PropTypes.string, // Should match the type of the selected state
  setSelectedState: PropTypes.func.isRequired,
  citiesData: PropTypes.array.isRequired,
  selectedCity: PropTypes.string,
  setSelectedCity: PropTypes.func.isRequired,
};

export default SearchSection;
