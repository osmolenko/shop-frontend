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

export default class Product extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 1,
        };
    }

    handleCountChange = (event) => {
        this.setState({ count: event.target.value });
    };

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount = () => {
        if(this.state.count !== 1){
            this.setState({
                count: this.state.count - 1
            });
        }
    }

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
                            <PlusMinusButton onClick={this.decrementCount}>-</PlusMinusButton>
                            <CountInput
                                value={this.state.count}
                                onChange={this.handleCountChange}
                            />
                            <PlusMinusButton onClick={this.incrementCount}>+</PlusMinusButton>
                        </CountContainer>
                    </PriceRow>
                    <AddToCart><AddToCartText>В корзину</AddToCartText><img src={cart}/></AddToCart>
                </BottomContainer>

            </ProductContainer>
        )
    }
}