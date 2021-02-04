import React from 'react'
import {
    ContactUsContainer,
    ContactUsForm,
    ContactUsHeader,
    ContactUsInput, ContactUsLabel, ContactUsSubmit, ContactUsSubmitButton, ContactUsSubmitButtonText,
    ContactUsTextArea
} from "./ContactUs.styled";
import ShopButton from "../../../ui-kit/ShopButton";

export default class ContactUs extends React.Component{
    render(){
        return(
            <ContactUsContainer>
                <ContactUsHeader>Остались вопросы?</ContactUsHeader>
                <ContactUsForm>

                    <ContactUsLabel for='name'>Ваше имя*</ContactUsLabel>
                    <ContactUsInput placeholder=' ' name='name'/>

                    <ContactUsLabel for='phone'>Номер телефона</ContactUsLabel>
                    <ContactUsInput placeholder=' ' name='phone'/>

                    <ContactUsLabel for='email'>Ваш email*</ContactUsLabel>
                    <ContactUsInput placeholder=' ' name='email'/>

                    <ContactUsLabel for='message'>Сообщение*</ContactUsLabel>
                    <ContactUsTextArea placeholder=' ' name='message' rows='5'/>

                    <ShopButton green text='Отправить' href='#' width='230'/>

                </ContactUsForm>
            </ContactUsContainer>
        )
    }
}