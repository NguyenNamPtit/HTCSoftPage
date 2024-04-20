import React from 'react';
import './Slide.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Import Swiper styles
import 'swiper/css';
import { Col, Container, Row } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='slide-item'>
                        <div className='slide-title'>
                            <div className='slide-content'>
                                <p className='title'>Develop Magento Service and Extensions</p>
                                <p className='content'>We provide the best service and outstanding products for your requirement</p>
                                <button>Get started<ArrowForwardIcon /></button>
                            </div>
                        </div>
                        <div className='slide-image'>
                            <img src={require('../../../assets/images/[Banner] Image.png')} alt='slide' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-item'>
                        <div className='slide-title'>
                            <div className='slide-content'>
                                <p className='title'>Develop Magento Service and Extensions</p>
                                <p className='content'>We provide the best service and outstanding products for your requirement</p>
                                <button>Get started <ArrowForwardIcon /></button>
                            </div>
                        </div>
                        <div className='slide-image'>
                            <img src={require('../../../assets/images/[Banner] Image.png')} alt='slide' />
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default Banner;



