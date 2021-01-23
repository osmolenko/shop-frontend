import React from 'react'
import {
    NewsContainer,
    NewsHeader,
    NewsText, SendButton,
    SendContainer, SendInput
} from "./News.styled";
import send from '../../../images/send.svg'

export default class Tagline extends React.Component{
    render(){
        return(
            <NewsContainer>
                <NewsHeader>Хотите узнать первыми о новинках?</NewsHeader>
                <NewsText>Введите ваш e-mail и будьте в курсе последних новостей, и новинок</NewsText>
                <SendContainer>
                    <SendInput placeholder='Ваш e-mail'/>
                    <SendButton type='submit'><img src={send} alt='Send'/></SendButton>
                </SendContainer>
            </NewsContainer>
        )
    }
}