import React from 'react';
import ShopButton from "../ui-kit/ShopButton";
import {DataContainer, ThanksContainer, ThanksHeader, ThanksText} from "./Thanks.styled";

class Thanks extends React.Component{
    render() {
        return(
            <ThanksContainer>
                <DataContainer>
                    <ThanksHeader>Спасибо за заказ!</ThanksHeader>
                    <ThanksText>Наш менеджер скоро свяжется с Вами для подтверждения заказа. Копия заказа будет отправлена Вам на почту. Проверьте правильность данных и свяжитесь с нами в случае ошибки.</ThanksText>
                    <ShopButton white width='262' href='#' text='Вернутся на главную'/>
                </DataContainer>
            </ThanksContainer>
        )
    }
}

export default Thanks;