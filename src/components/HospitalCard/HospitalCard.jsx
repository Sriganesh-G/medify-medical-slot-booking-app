import React, { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import hospitalImages from "../../../public/assets/images/hospitalImage.png";
import "./HospiralCard.css";
import Buttons from "../Buttons/Buttons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import thumb from "../../../public/assets/images/thumb.png";

const HospitalCard = ({ hospitalDetails }) => {
  useEffect(() => {
    console.log("This is from Hospital card component", hospitalDetails);
  }, [hospitalDetails]);

  if (!hospitalDetails || hospitalDetails.length === 0) {
    return <p>No hospital details available</p>;
  }

  return (
    <>
      {hospitalDetails.map((hospital, index) => (
        <Grid
          key={index}
          container
          spacing={5}
          sx={{ backgroundColor: "white", p: "5%", borderRadius: "16px" }}
        >
          <Grid item xs={2}>
            <Box>
              <img
                src={hospitalImages}
                alt="hospitalImage"
                height={"124px"}
                width={"124px"}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ margin: "10% 0%" }}>
              <h5
                style={{
                  fontSize: "20px",
                  color: "#14BEF0",
                  marginBottom: "10px",
                }}
              >
                {hospital["Hospital Name"] || "Hospital Name Unavailable"}
              </h5>
              <h6
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {hospital.City
                  ? `${hospital.City}, ${hospital.State}`
                  : "Location Unavailable"}
              </h6>
              <p style={{ marginBottom: "10px" }}>
                {hospital.Address || "Address Unavailable"}
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
                  style={{
                    color: "#02A401",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
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
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                gap: "10px",
              }}
            >
              <p
                className="btnTxt"
                style={{
                  color: "#02A401",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Available Today
              </p>
              <Buttons value={"Book FREE Center Visit"} />
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

HospitalCard.propTypes = {
  hospitalDetails: PropTypes.shape({
    "Provider ID": PropTypes.string.isRequired,
    "Hospital Name": PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
    "ZIP Code": PropTypes.number,
    "Phone Number": PropTypes.number,
    "Hospital Type": PropTypes.string,
    "Hospital Ownership": PropTypes.string,
    "Emergency Services": PropTypes.string,
    "Meets criteria for meaningful use of EHRs": PropTypes.string,
    "Hospital overall rating": PropTypes.number,
  }).isRequired, // hospitalDetails is now expected to be a single object
};
export default HospitalCard;
