import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './index.css';


//
import test from "../../assets/images/[Product4] Image.png"
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
