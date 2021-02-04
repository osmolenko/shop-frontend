import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import slidero from "../../../images/banner/1.png"
import slidert from "../../../images/banner/2.png"
import sliderh from "../../../images/banner/3.png"
import sliderf from "../../../images/banner/4.png"
import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from "swiper";
import {SliderBackground, SliderText} from "./Slider.styled";
import ShopButton from "../../../ui-kit/ShopButton";

export default class Slider extends React.Component{
    render(){
        SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
        return(
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

                loop
                >
                <SwiperSlide>
                    <SliderBackground url={slidero}>
                        <SliderText>Магазин ЭКО-товаров для дома</SliderText>
                        <ShopButton green width='230' text='В каталог'/>
                    </SliderBackground>
                </SwiperSlide>

                <SwiperSlide>
                    <SliderBackground url={slidert}>
                        <SliderText>ЭКО химия без вреда для природы</SliderText>
                        <ShopButton green width='230' text='В каталог'/>
                    </SliderBackground>
                </SwiperSlide>

                <SwiperSlide>
                    <SliderBackground url={sliderh}>
                        <SliderText>Сладости могут быть полезными</SliderText>
                        <ShopButton green width='230' text='В каталог'/>
                    </SliderBackground>
                </SwiperSlide>

                <SwiperSlide>
                    <SliderBackground url={sliderf}>
                        <SliderText>Огранические эфирные масла</SliderText>
                        <ShopButton green width='230' text='В каталог'/>
                    </SliderBackground>
                </SwiperSlide>

            </Swiper>
        )
    }
}