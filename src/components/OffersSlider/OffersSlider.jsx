import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./OffersSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import offerImage1 from "../../../public/assets/images/offerImages/offerImage1.png";
import offerImage2 from "../../../public/assets/images/offerImages/offerImage2.png";

export default function OffersSlider() {
  return (
    <div>
      <Swiper
        /*  slidesPerView={3}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper" */
        pagination={{ clickable: true }}
        navigation={true} // For next/prev buttons
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={3} // Show 3 images at a time
        spaceBetween={0} // Add space between the images
        breakpoints={{
          // Adjust for smaller screens
          40: {
            slidesPerView: 1,
          },
          240: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          760: {
            slidePerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={offerImage1} alt="offerImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offerImage2} alt="offerImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offerImage1} alt="offerImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offerImage2} alt="offerImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offerImage1} alt="offerImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offerImage2} alt="offerImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
