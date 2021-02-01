import React from "react";
import {
    CardContainer,
    CardText
} from "./Cat.styled";
import ShopButton from "../../../ui-kit/ShopButton";

export default class Cat extends React.Component{
    render(){
        return(
            <CardContainer image={this.props.data.img}>
                <CardText>{this.props.data.name}</CardText>
                <ShopButton black width='238' href={this.props.data.link} text='В каталог' margin='0 0 27px 0'/>
            </CardContainer>
        )
    }
}

