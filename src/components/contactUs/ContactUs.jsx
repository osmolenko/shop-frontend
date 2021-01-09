import React from 'react'
import {
    ContactUsContainer,
    ContactUsForm,
    ContactUsHeader,
    ContactUsInput, ContactUsSubmit,
    ContactUsTextArea
} from "./ContactUs.styled";

export default class ContactUs extends React.Component{
    render(){
        return(
            <ContactUsContainer>
                <ContactUsHeader>Остались вопросы?</ContactUsHeader>
                <ContactUsForm>
                    <ContactUsInput placeholder='Имя'/>
                    <ContactUsInput placeholder='Телефон'/>
                    <ContactUsInput placeholder='Email'/>
                    <ContactUsTextArea placeholder='Сообщение'/>
                    <ContactUsSubmit>Отправить</ContactUsSubmit>
                </ContactUsForm>
            </ContactUsContainer>
        )
    }
}