import React from 'react'
import {TaglineContainer, TaglineLeftImage, TaglineRightImage, TaglineText} from "./Tagline.styled";

export default class Tagline extends React.Component{
    render(){
        return(
            <TaglineContainer>
                <TaglineLeftImage/>
                <TaglineText>{this.props.text}</TaglineText>
                <TaglineRightImage/>
            </TaglineContainer>
        )
    }
}