import React from 'react';
import {
    NotFoundButton,
    NotFoundContainer,
    NotFoundHeader, NotFoundImage,
    NotFoundInfoContainer,
    NotFoundText
} from "./NotFound.styled";

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
                    <NotFoundButton>Вернуться на главную</NotFoundButton>
                </NotFoundInfoContainer>

                <NotFoundImage src='https://shop.osmolenko.cloud/404/404.png' alt='Not found!'/>

            </NotFoundContainer>
        )
    }
}

export default NotFound;