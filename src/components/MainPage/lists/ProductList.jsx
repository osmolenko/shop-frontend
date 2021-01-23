import React from "react";
import {
    CardHeaderContainer,
    CardListContainer,
    CardListHeader,
    CardsContainer
} from "./Lists.styled";
import Product from "../../product/Product";

export default class ProductList extends React.Component{
    render(){
        return(
            <CardListContainer>
                <CardHeaderContainer>
                    <CardListHeader>{this.props.data.name}</CardListHeader>
                </CardHeaderContainer>
                <CardsContainer products>
                    {this.props.data.data.map(value => {
                        return(
                            <Product data={value}/>
                        )
                    })}
                </CardsContainer>
            </CardListContainer>
        )
    }
}