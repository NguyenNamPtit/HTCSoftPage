import React from 'react';
import './Banner.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-item'>
                <div>
                    <img src={require('../../../assets/images/[AboutUs] Image.png')} alt='banner' />
                </div>
                <div className='banner-title'>
                    <div className='banner-content'>
                        <p className='title'>What we do</p>
                        <p className='content'>With a team of professional developers, we are confident to build quality, unique websites based on customers' needs.  </p>

                        <Link to='' className='banner-link'>ABOUT US <ArrowForwardIcon /></Link>


                    </div>
                </div>
            </div>
            <div className='banner-detail'>
                <div className='list-item'>
                    <div className='child-item-development'>
                        <p className='title-detail'>— Development</p>
                        <p className='content-detail'>With 6 years of experience working with Magento e-commerce platform, we are confident that we will help you to build your own Magento Store with full of preeminent features, superior management, absolute security website data.</p>
                    </div>
                    <div className='child-item-optimization'>
                        <p className='title-detail-child'>— Optimization</p>
                        <p className='content-detail-child'>Are you facing with problem about website efficiency? We are here to find your problem and solve them, make your website work better and faster.</p>
                    </div>
                    <div className='child-item-migration'>
                        <p className='title-detail-child'>— Migration</p>
                        <p className='content-detail-child'>The magento development team has officially terminated magento 1 support in 2020. Magento 1 users are facing security vulnerabilities. HTCMage is committed to helping you deploy it safely.</p>
                    </div>
                </div>
            </div>
            <div className='banner-slide'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='banner-slide-item'>
                            <div className='banner-slide-title'>
                                <div className='banner-slide-content'>
                                    <p className='title'>What our clients say</p>
                                    <p className='content'>“Everything I need is in their products and services. Moreover, team of HTCMage are very interesting people and nice guys.”</p>
                                    <p className='author'>Nikki Mike</p>
                                </div>
                            </div>
                            <div className='banner-slide-image'>
                                <img src={require('../../../assets/images/[Slide] Image.png')} alt='slide' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='banner-slide-item'>
                            <div className='banner-slide-title'>
                                <div className='banner-slide-content'>
                                    <p className='title'>What our clients say</p>
                                    <p className='content'>“Everything I need is in their products and services. Moreover, team of HTCMage are very interesting people and nice guys.”</p>
                                    <p className='author'>Nikki Mike</p>
                                </div>
                            </div>
                            <div className='banner-slide-image'>
                                <img src={require('../../../assets/images/[Slide] Image.png')} alt='slide' />
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
}

export default Banner;
