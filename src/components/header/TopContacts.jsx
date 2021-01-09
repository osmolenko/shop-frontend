import React from 'react'
import {
    ContactContainer, ContactSmallText,
    SocialSmallImage, SocialSmallLink,
    SocialTopContactsContainer,
    TopContactsContainer
} from "./TopContacts.styled";
import facebook from '../../images/facebook.svg'
import linkedin from '../../images/linkedin.svg'

export default class TopContacts extends React.Component{
    render(){
        return(
            <TopContactsContainer>

                <SocialTopContactsContainer>
                    <SocialSmallLink href='#'>
                        <SocialSmallImage src={facebook}/>
                    </SocialSmallLink>
                    <SocialSmallLink href='#'>
                        <SocialSmallImage src={linkedin}/>
                    </SocialSmallLink>
                </SocialTopContactsContainer>

                <ContactContainer>
                    <ContactSmallText>+38 (097) 431-1025</ContactSmallText>
                    <ContactSmallText>+38 (097) 431-1025</ContactSmallText>
                </ContactContainer>



            </TopContactsContainer>
        )
    }
}