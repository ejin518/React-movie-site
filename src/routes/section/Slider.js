import React from 'react';
import {
    Link
  } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({movies}) => {
    return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}><img src={movie.medium_cover_image} alt={movie.title} />
                <p>{movie.title}</p></Link>
            </SwiperSlide>
       ))} 
    </Swiper>
  );
};

export default Slider;