import React from 'react'
import wish from '../../images/wish.svg'
import cart from '../../images/cartW.svg'
import {
    AddToCart,
    AddToCartText,
    BottomContainer,
    CountContainer,
    CountInput,
    Hr,
    PlusMinusButton,
    Price,
    PriceRow,
    ProductArt,
    ProductBigImage,
    ProductContainer,
    ProductDataContainer,
    ProductImageContainer,
    ProductName,
    ProductSmallImage,
    ProductSmallImageContainer,
    ProductStatus,
    WishButton
} from "./Product.styled";
import Count from "./Count";

export default class Product extends React.Component{


    render(){
        return(
            <ProductContainer>
                <div>
                    <WishButton><img src={wish}/></WishButton>
                    <ProductImageContainer>
                        <ProductSmallImageContainer>
                            <ProductSmallImage src={this.props.data.img}/>
                            <ProductSmallImage src={this.props.data.img}/>
                        </ProductSmallImageContainer>
                        <ProductBigImage src={this.props.data.img}/>
                    </ProductImageContainer>

                    <ProductDataContainer>
                        {this.props.data.status ? <ProductStatus>В наличии</ProductStatus> : <ProductStatus red>Нет в наличии</ProductStatus>}
                        <ProductArt>Артикул: {this.props.data.art}</ProductArt>
                        <ProductName>{this.props.data.name}</ProductName>

                    </ProductDataContainer>
                </div>

                <BottomContainer>
                    <Hr/>
                    <PriceRow>
                        <Price>{this.props.data.price} грн.</Price>
                        <CountContainer>
                            <Count/>
                        </CountContainer>
                    </PriceRow>
                    <AddToCart><AddToCartText>В корзину</AddToCartText><img src={cart}/></AddToCart>
                </BottomContainer>

            </ProductContainer>
        )
    }
}