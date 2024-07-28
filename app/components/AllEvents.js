"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Event from "./Event";

export default function AllEvents() {
  return (
    <div className="mySwiper">
    <h1>Events</h1>
    <hr />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          // When window width is >= 0px (Mobile)
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10, // Adjust space for mobile
          },
          // When window width is >= 768px (Tablet)
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20, // Adjust space for tablets
          },
          // When window width is >= 1024px (Desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Event />
        </SwiperSlide>
        <SwiperSlide>
          <Event />
        </SwiperSlide>
        <SwiperSlide>
          <Event />
        </SwiperSlide>
        <SwiperSlide>
          <Event />
        </SwiperSlide>
        <SwiperSlide>
          <Event />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
