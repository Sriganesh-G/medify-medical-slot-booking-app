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
            <img
              src="../../../public/assets/images/specialistImage/Doctor.png"
              alt="Doctors"
            />
            <p>Doctors</p>
          </div>
          <div className="lowerImages">
            <img
              src="../../../public/assets/images/specialistImage/Drugstore.png"
              alt="Doctors"
            />
            <p>Labs</p>
          </div>
          <div id="hospitalImage">
            <img
              src="../../../public/assets/images/specialistImage/Hospital.png"
              alt="Doctors"
            />
            <p>Hospitals</p>
          </div>
          <div className="lowerImages">
            <img
              src="../../../public/assets/images/specialistImage/Capsule.png"
              alt="Doctors"
            />
            <p>Medical Store</p>
          </div>
          <div className="lowerImages">
            <img
              src="../../../public/assets/images/specialistImage/Ambulance.png"
              alt="Doctors"
            />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
