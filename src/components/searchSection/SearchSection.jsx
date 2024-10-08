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
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchSection = ({
  statesData,
  selectedState,
  setSelectedState,
  citiesData,
  selectedCity,
  setSelectedCity,
  onSearch,
  hospitalDetails,
  setHospitalDetails,
}) => {
  // using useNavigate to travel to the search result page
  const navigate = useNavigate();

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
          //   console.log("API Response:", response.data);

          setHospitalDetails(response.data);
        } catch (e) {
          console.log("Error fetching hospital details:", e);
        }
      } else {
        console.log("State or city not selected.");
      }
    };

    fetchHospitalDetails();
  }, [selectedState, selectedCity, setHospitalDetails]); */ // Trigger when selectedState or selectedCity changes

  // This will log hospital details if there are any
  /*  useEffect(() => {
    if (hospitalDetails.length > 0) {
      console.log(
        "Hospitals details from search section component ",
        hospitalDetails
      );
    } else {
      console.log("No hospital details found.");
    }
  }, [hospitalDetails]); // Monitor hospitalDetails for changes
 */
  // Destructure props correctly

  const handleClick = () => {
    // Check if state and city are selected
    if (!selectedState || !selectedCity) {
      alert("Please select both a state and a city before searching.");
      return; // Prevent the search if either state or city is not selected
    }

    // navigate to the search results
    navigate("/search", {
      state: {
        statesData,
        citiesData,
        selectedState,
        selectedCity,
        hospitalDetails,
      },
    });
  };

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
          required
        />
        <Buttons onClick={handleClick} icon={true} value="Search" />
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
  onSearch: PropTypes.func.isRequired,
};

export default SearchSection;
