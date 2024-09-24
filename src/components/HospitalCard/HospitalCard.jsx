import React from "react";
import hospitalImages from "../../../public/assets/images/hospitalImage.png";
import "./HospiralCard.css";
import Buttons from "../Buttons/Buttons";
const HospitalCard = ({ hospitalDetails }) => {
  return (
    <div className="hospitalCardContainer">
      <div className="imageContainer">
        <img
          src={hospitalImages}
          alt="hospitalImage"
          height={"124px"}
          width={"124px"}
        />
      </div>
      <div className="hospitalDetails">
        <h5>Fortis Hospital Richmond Road</h5>
        <h6>Banglore, Karnataka</h6>
        <p>Smilessence Center for Advanced Dentistry + 1 more</p>

        <p>
          <span>FREE</span> <span>₹500</span> Consultation fee at clinic
        </p>
      </div>
      <div className="btn">
        <p className="btnTxt">Available Today</p>
        <Buttons value={"Book FREE Center Visit"} />
      </div>
    </div>
  );
};

export default HospitalCard;
