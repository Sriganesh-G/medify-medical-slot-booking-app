import React from "react";
import hospitalImages from "../../../public/assets/images/hospitalImage.png";
import "./HospiralCard.css";
import Buttons from "../Buttons/Buttons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import thumb from "../../../public/assets/images/thumb.png";
const HospitalCard = ({ hospitalDetails }) => {
  return (
    <Grid
      container
      spacing={5}
      sx={{ backgroundColor: "white", p: "5%", borderRadius: "16px" }}
    >
      <Grid size={2} item xs={2}>
        <Box>
          <img
            src={hospitalImages}
            alt="hospitalImage"
            height={"124px"}
            width={"124px"}
          />
        </Box>
      </Grid>
      <Grid size={6}>
        <Box sx={{ margin: "10% 0%" }}>
          <h5
            style={{ fontSize: "20px", color: "#14BEF0", marginBottom: "10px" }}
          >
            {hospitalDetails["Hospital Name"]}
          </h5>
          <h6
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Banglore, Karnataka
          </h6>
          <p style={{ marginBottom: "10px" }}>
            Smilessence Center for Advanced Dentistry + 1 more
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10px",
              marginRight: "25%",
            }}
          >
            <span
              style={{ color: "#02A401", fontWeight: "bold", fontSize: "14px" }}
            >
              FREE
            </span>{" "}
            <span style={{ textDecoration: "line-through" }}>₹500</span>
            Consultation fee at clinic
          </p>
          <div
            style={{
              backgroundColor: "#00A500",
              maxWidth: "50px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              color: "white",
              marginTop: "5%",
            }}
          >
            <img src={thumb} alt="thumb" />
            <p>5</p>
          </div>
        </Box>
      </Grid>
      <Grid size={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%", // Fill the entire height of the grid
            justifyContent: "flex-end", // Push content to the bottom
            alignItems: "center", // Align content to the center horizontally
            textAlign: "center",
            gap: "10px",
          }}
        >
          <p
            className="btnTxt"
            style={{ color: "#02A401", fontWeight: "bold", fontSize: "14px" }}
          >
            Available Today
          </p>
          <Buttons value={"Book FREE Center Visit"} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HospitalCard;
