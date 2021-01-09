import React from 'react'
import {LureContainer, LureLeftImage, LureRightImage, LureText, LureTextContainer, LureTextHeader} from "./Lure.styled";

export default class Lure extends React.Component{
    render(){
        return(
            <LureContainer>
                <LureLeftImage/>
                <LureTextContainer>
                    <LureTextHeader>Почему клиенты выбирают нас</LureTextHeader>
                    <LureText>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.
                    </LureText>
                    <LureText>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.
                    </LureText>
                </LureTextContainer>
                <LureRightImage/>
            </LureContainer>
        )
    }
}