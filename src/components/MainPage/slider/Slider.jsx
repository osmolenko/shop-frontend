import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {SliderContainer} from "./Slider.styled";

export default class Slider extends React.Component{
    render(){

        const images = [
            { url: "https://shop.osmolenko.cloud/banner/1.png" },
            { url: "https://shop.osmolenko.cloud/banner/2.png" },
            { url: "https://shop.osmolenko.cloud/banner/3.png" },
            { url: "https://shop.osmolenko.cloud/banner/4.png" },
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