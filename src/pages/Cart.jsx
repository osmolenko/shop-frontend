import React from 'react';
import {
    All,
    CartContainer,
    CartHeader,
    CartProductArt,
    CartProductImage,
    CartProductName,
    CartProductTextContainer,
    CartTable,
    CartTableContent,
    CartTableHead,
    CartTableHeadText,
    CartTableRow,
    Price,
    Product,
    Quantity,
    QuantityContainer, Remove, RemoveButton, RemoveImg, SummonButtonsContainer, SummonContainer, SummonInt, SummonText
} from "./Cart.styled";
import {StyledProductPrice} from "../common.styled/text.styled";
import Count from "../components/product/Count";
import remove from '../images/remove.svg'
import ShopButton from "../ui-kit/ShopButton";

export default class Cart extends React.Component {
    render() {
        return(
            <CartContainer>
                <CartHeader>Корзина</CartHeader>
                <CartTable>
                    <CartTableRow>
                        <CartTableHead>
                            <CartTableHeadText>
                                Товар
                            </CartTableHeadText>
                        </CartTableHead>
                        <CartTableHead>
                            <CartTableHeadText>
                                Цена
                            </CartTableHeadText>
                        </CartTableHead>
                        <CartTableHead>
                            <CartTableHeadText>
                                Кол-во
                            </CartTableHeadText>
                        </CartTableHead>
                        <CartTableHead>
                            <CartTableHeadText>
                                Всего
                            </CartTableHeadText>
                        </CartTableHead>
                        <CartTableHead>
                        </CartTableHead>
                    </CartTableRow>
                    <CartTableRow>
                        <CartTableContent>
                            <Product>
                                <CartProductImage src='https://s3.images-iherb.com/aur/aur91696/y/14.jpg' alt='image'/>
                                <CartProductTextContainer>
                                    <CartProductName>Английская соль для ванн Relaxing Lavander, 110 г.</CartProductName>
                                    <CartProductArt>Артикул: 12414405</CartProductArt>
                                </CartProductTextContainer>
                            </Product>
                        </CartTableContent>
                        <CartTableContent>
                            <Price>
                                <StyledProductPrice>
                                    120.00 грн.
                                </StyledProductPrice>
                            </Price>
                        </CartTableContent>
                        <CartTableContent>
                            <QuantityContainer>
                                <Quantity>
                                    <Count/>
                                </Quantity>
                            </QuantityContainer>
                        </CartTableContent>
                        <CartTableContent>
                            <All>
                                <StyledProductPrice>
                                    120.00 грн.
                                </StyledProductPrice>
                            </All>
                        </CartTableContent>
                        <CartTableContent>
                            <Remove>
                                <RemoveButton>
                                    <RemoveImg src={remove} alt='remove'/>
                                </RemoveButton>
                            </Remove>
                        </CartTableContent>
                    </CartTableRow>
                </CartTable>

                <SummonContainer>
                    <SummonText>
                        <CartTableHeadText>
                            Сумма заказа:
                        </CartTableHeadText>
                    </SummonText>
                    <SummonInt>
                        <StyledProductPrice>
                            120.00 грн.
                        </StyledProductPrice>
                    </SummonInt>

                    <SummonButtonsContainer>
                        <ShopButton white text="Продолжить покупки" width='248' margin='0 25px 0 0'/>
                        <ShopButton green text="Оформить заказ" width='248'/>
                    </SummonButtonsContainer>

                </SummonContainer>

            </CartContainer>
        )
    }
}