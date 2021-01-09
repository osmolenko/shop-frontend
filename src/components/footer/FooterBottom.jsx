import React from 'react'
import {FooterBottomContainer, FooterBottomLink, FooterBottomText} from "./FooterBottom.styled";

export default class FooterBottom extends React.Component{
    render() {
        return (
            <FooterBottomContainer>
                <FooterBottomText>© 2021. All rights reserved</FooterBottomText>
                <FooterBottomLink src='#'>Privacy Policy</FooterBottomLink>
                <FooterBottomLink src='#'>Offer agreement</FooterBottomLink>
            </FooterBottomContainer>
        );
    }
}