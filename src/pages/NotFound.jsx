import React from 'react';
import {
    NotFoundContainer,
    NotFoundHeader,
    NotFoundImage,
    NotFoundInfoContainer,
    NotFoundText
} from "./NotFound.styled";
import ShopButton from "../ui-kit/ShopButton";
import NotFoundimg from '../images/404/404.png'

class NotFound extends React.Component{
    render() {
        return(
            <NotFoundContainer>
                <NotFoundInfoContainer>
                    <NotFoundHeader>
                        Уууупс!&nbsp;Эта страница&nbsp;не Эко&nbsp;:&nbsp;(
                    </NotFoundHeader>
                    <NotFoundText>
                        Кажется, этой страницы не существует, либо она временно не работает.
                    </NotFoundText>
                    <ShopButton green width='262' text='Вернутся на главную' href="321"/>
                </NotFoundInfoContainer>

                <NotFoundImage src={NotFoundimg} alt='Not found!'/>

            </NotFoundContainer>
        )
    }
}

export default NotFound;