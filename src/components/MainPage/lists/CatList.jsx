import React from 'react'
import {
    CardHeaderContainer,
    CardListContainer,
    CardListHeader,
    CardMoreLink,
    CardsContainer
} from "./Lists.styled";

import arrowLeft from '../../../images/arrow-left.svg'
import Cat from "../cats/Cat";

export default class CatList extends React.Component{
    render(){
        return(
            <CardListContainer>
                <CardHeaderContainer>
                    <CardListHeader>{this.props.data.name}</CardListHeader>
                    <CardMoreLink href={this.props.data.link}>Все категории <img src={arrowLeft}/></CardMoreLink>
                </CardHeaderContainer>
                <CardsContainer>
                    {this.props.data.data.map(value => {
                        return(
                                <Cat data={value}/>
                        )
                    })}
                </CardsContainer>
            </CardListContainer>
        )
    }
}