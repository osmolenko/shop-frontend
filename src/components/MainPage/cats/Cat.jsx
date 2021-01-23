import React from "react";
import {
    CardButton,
    CardButtonText,
    CardContainer,
    CardText
} from "./Cat.styled";

export default class Cat extends React.Component{
    render(){
        return(
            <CardContainer image={this.props.data.img}>
                <CardText>{this.props.data.name}</CardText>
                <CardButton href={this.props.data.link}><CardButtonText>В каталог</CardButtonText></CardButton>
            </CardContainer>
        )
    }
}

