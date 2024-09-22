import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Navigation styles if you want next/prev buttons

import "./MedicalSpecialistSlider.css";

//images importing
import AhmedKhan from "../../../public/assets/images/MedicalSpecialistImage/3.png";
import Heena from "../../../public/assets/images/MedicalSpecialistImage/1.png";
import Ankur from "../../../public/assets/images/MedicalSpecialistImage/2.png";
import AhmadStevens from "../../../public/assets/images/MedicalSpecialistImage/4.png";
import Lesley from "../../../public/assets/images/MedicalSpecialistImage/5.png";
const MedicalSpecialistSlider = () => {
  return (
    <div className="sliderContainer">
      <div className="textHeading">
        <h3>Our Medical Specialist</h3>
      </div>
      <div className="sliderImage">
        <Swiper
          pagination={{ clickable: true }}
          loop={true} // Infinite loop
          slidesPerView={4.35} // Show 3 and a half slides
          spaceBetween={0} // Adjust the spacing between slides
          modules={[Pagination]} // Removed Navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={AhmedKhan} alt="Ahmed Khan" />
            <div className="docDetails">
              <p className="docName">Dr. Ahmad Khan</p>
              <p className="specialisation">Orthopadics</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Heena} alt="Heena" />
            <div className="docDetails">
              <p className="docName">Dr. Heena Sachdeva</p>
              <p className="specialisation">Medicine</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ankur} alt="Ankur" />
            <div className="docDetails">
              <p className="docName">Dr. Ankur Sharma</p>
              <p className="specialisation">Neurologist</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={AhmadStevens} alt="Ahmad Stevens" />
            <div className="docDetails">
              <p className="docName">Dr. Ahmad Stevens</p>
              <p className="specialisation">Neurologist</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Lesley} alt="Lesley" />
            <div className="docDetails">
              <p className="docName">Dr. Lesley Hull</p>
              <p className="specialisation">Medicine</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MedicalSpecialistSlider;
