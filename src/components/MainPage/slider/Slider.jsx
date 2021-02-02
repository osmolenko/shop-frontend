import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import slidero from "../../../images/banner/1.png"
import slidert from "../../../images/banner/2.png"
import sliderh from "../../../images/banner/3.png"
import sliderf from "../../../images/banner/4.png"
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from "swiper";

export default class Slider extends React.Component{
    render(){
        SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
        return(
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                >
                <SwiperSlide><a href="#"><img src={slidero} alt="slider"/></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src={slidert} alt="slider"/></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src={sliderh} alt="slider"/></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src={sliderf} alt="slider"/></a></SwiperSlide>

            </Swiper>
        )
    }
}