import React from "react";
import "./SpecialistSection.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchBar from "../SearchBar/SearchBar";
import Buttons from "../Buttons/Buttons";
import { Stack } from "@mui/material";
import LabsImage from "../../../public/assets/images/specialistImage/Drugstore.png";
import PrimaryCare from "../../../public/assets/images/FindSpecialistImage/Stethoscope.png";
import Cardiology from "../../../public/assets/images/FindSpecialistImage/HeartRate.png";
import MRIResonance from "../../../public/assets/images/FindSpecialistImage/HeartRateMonitor.png";
import BloodTest from "../../../public/assets/images/FindSpecialistImage/BloodSample.png";
import Piscologist from "../../../public/assets/images/FindSpecialistImage/Immune.png";
import Xray from "../../../public/assets/images/FindSpecialistImage/X-Ray.png";

const SpecialistSection = () => {
  return (
    <div className="specialistSection">
      <div className="lowerSection">
        <h4 className="lowText">Find by specialisation</h4>
        <div className="imageContainer">
          <div className="lowerImages">
            <img src={LabsImage} alt="Doctors" />
            <p>Dentistry</p>
          </div>
          <div className="lowerImages">
            <img src={PrimaryCare} alt="Medical Store" />
            <p>Primary Care</p>
          </div>
          <div className="lowerImages">
            <img src={Cardiology} alt="Ambulance" />
            <p>Cardiology</p>
          </div>
          <div className="lowerImages">
            <img src={MRIResonance} alt="Medical Store" />
            <p>MRI Resonance</p>
          </div>
          <div className="lowerImages">
            <img src={BloodTest} alt="Ambulance" />
            <p>Blood Test</p>
          </div>
          <div className="lowerImages">
            <img src={Piscologist} alt="Medical Store" />
            <p>Piscologist</p>
          </div>
          <div className="lowerImages">
            <img src={LabsImage} alt="Ambulance" />
            <p>Laboratory</p>
          </div>
          <div className="lowerImages">
            <img src={Xray} alt="Ambulance" />
            <p>X-Ray</p>
          </div>
        </div>
        <div className="btn">
          <Buttons value={"View All"} />
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection;
