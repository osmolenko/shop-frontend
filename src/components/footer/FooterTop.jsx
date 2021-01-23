import React from 'react'
import {
    FooterTopContainer,
    FooterTopLink,
    FooterTopLinkContainer,
    FooterTopLogo,
    FooterTopNumber,
    FooterTopNumberContainer,
    FooterTopSocialButton,
    FooterTopSocialButtonContainer,
    FooterTopSocialContainer,
    FooterTopSocialImage,
    FooterTopSocialText
} from "./FooterTop.styled";
import facebook from '../../images/facebook.svg'
import linkedin from '../../images/linkedin.svg'
import logo from '../../images/logo_white.svg'

export class FooterTop extends React.Component{
    render() {
        return(
            <FooterTopContainer>
                <FooterTopLogo><img src={logo} alt='eco shop'/></FooterTopLogo>

                <FooterTopLinkContainer>
                    <FooterTopLink href='#'>Категории</FooterTopLink>
                    <FooterTopLink href='#'>Про нас</FooterTopLink>
                    <FooterTopLink href='#'>Доставка и оплата</FooterTopLink>
                    <FooterTopLink href='#'>Контакты</FooterTopLink>
                </FooterTopLinkContainer>

                <FooterTopNumberContainer>
                    <FooterTopNumber>+38 (097) 431-1025</FooterTopNumber>
                    <FooterTopNumber>+38 (097) 431-1025</FooterTopNumber>
                </FooterTopNumberContainer>

                <FooterTopSocialContainer>
                    <FooterTopSocialText>Найдите нас в соцсетях</FooterTopSocialText>
                    <FooterTopSocialButtonContainer>
                        <FooterTopSocialButton>
                            <img src={facebook}/>
                        </FooterTopSocialButton>
                        <FooterTopSocialButton>
                            <img src={linkedin}/>
                        </FooterTopSocialButton>
                    </FooterTopSocialButtonContainer>
                </FooterTopSocialContainer>
            </FooterTopContainer>
        )
    }
}