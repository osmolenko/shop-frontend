import React from 'react'
import {
    CardButton, CardButtonText,
    CardContainer, CardHeaderContainer,
    CardImage,
    CardListContainer,
    CardListHeader, CardMoreLink,
    CardsContainer,
    CardText
} from "./CardList.styled";

import arrowLeft from '../../images/arrow-left.svg'

export default class CardList extends React.Component{
    render(){
        return(
            <CardListContainer>
                <CardHeaderContainer>
                    <CardListHeader>{this.props.data.name}</CardListHeader>
                    {this.props.data.link ? <CardMoreLink href={this.props.data.link}>Все категории <img src={arrowLeft}/></CardMoreLink> : ''}
                </CardHeaderContainer>
                <CardsContainer>
                    {this.props.data.data.map(value => {
                        return(
                            <CardContainer>
                                <CardImage src={value.img}/>
                                <CardText>{value.name}</CardText>
                                <CardButton href={value.link}><CardButtonText>В каталог</CardButtonText></CardButton>
                            </CardContainer>
                            )
                    })}
                </CardsContainer>
            </CardListContainer>
        )
    }
}