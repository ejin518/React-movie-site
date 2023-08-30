import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './BgSlider.css';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';


const BgSlider = () => {
  return (
    <>
    <Swiper
      effect={'fade'}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className='banner banImg1'>
            <h2>Slider1</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner banImg2'>
            <h2>Slider2</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner banImg3'>
            <h2>Slider3</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner banImg4'>
            <h2>Slider1</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default BgSlider