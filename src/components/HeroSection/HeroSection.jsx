import React from "react";
import "./HeroSection.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Buttons from "../Buttons/Buttons";
import heroImage from "../../../public/assets/images/heroImage.png";
import "../../App.css";
const HeroSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 30px",
        paddingRight: "100px",
        boxSizing: "border-box",
      }}
      className="heroSection"
    >
      <div className="heroTexts">
        <Stack
          spacing={1}
          direction={"column"}
          p={2}
          display={"flex"}
          justifyContent={"center"}
          padding={5}
          sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}
        >
          <h4>Skip the travel! Find Online</h4>
          <h1>
            Medical <span>Centers</span>
          </h1>
          <p className="heroPara">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <div className="findCenterBtn">
            <Buttons value={"Find Centers"} />
          </div>
        </Stack>
      </div>
      <div className="heroImage">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
