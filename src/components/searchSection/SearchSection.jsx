import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchBar from "../SearchBar/SearchBar";
import Buttons from "../Buttons/Buttons";
import "./SearchSection.css";
import { Stack } from "@mui/material";
import DoctorsImage from "../../../public/assets/images/specialistImage/Doctor.png";
import LabsImage from "../../../public/assets/images/specialistImage/Drugstore.png";
import HospitalImage from "../../../public/assets/images/specialistImage/Hospital.png";
import CapsuleImage from "../../../public/assets/images/specialistImage/Capsule.png";
import AmbulanceImage from "../../../public/assets/images/specialistImage/Ambulance.png";

const SearchSection = () => {
  return (
    <div className="searchSection">
      <div className="upperSearchSection">
        <SearchBar value={"State"} />
        <SearchBar value={"City"} />
        <Buttons value={"Search"} />
      </div>
      <div className="lowerSeacrchSection">
        <h4 className="lowText">You may be looking for</h4>
        <div
          className="imageContainer"
          /*    spacing={2}
          direction={"row"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"} */
        >
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

export default SearchSection;
