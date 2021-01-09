import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {SliderContainer} from "./Slider.styled";

export default class Slider extends React.Component{
    render(){

        const images = [
            { url: "https://images.wallpaperscraft.com/image/sunset_field_sky_beautiful_landscape_116179_1366x768.jpg" },
            { url: "https://images.wallpaperscraft.com/image/sunset_skyline_sky_night_landscape_120346_1366x768.jpg" },
            { url: "https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg" },
        ];

        return(
            <SliderContainer>
                <SimpleImageSlider
                    width="100%"
                    height="80vh"
                    images={images}
                    useGPURender
                    showBullets
                    showNavs
                    navStyle='2'
                />
            </SliderContainer>
        )
    }
}