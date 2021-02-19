import React from 'react';
import {
    BigImage,
    BigInfoContainer,
    BigInfoDataColumn,
    BigInfoHeader,
    BigInfoRow,
    BigInfoTable,
    BigInfoText,
    BigInfoTypeColumn,
    ImagesContainer, MoreContainer, MoreHeader,
    ProductPageArt, ProductPageArtSm,
    ProductPageContainer,
    ProductPageHeader,
    SmallImage,
    SmallImageContainer,
    SmallInfo,
    SmallInfoContainer,
    SmallInfoCount,
    SmallInfoPrice,
    SmallInfoStatus,
    SmallInfoText,
    SmallInfoWish,
    TopContainer
} from "./ProductPage.styled";
import wish from '../images/wish.svg';
import Select from "../components/product/Select";
import Count from "../components/product/Count";
import ShopButton from "../ui-kit/ShopButton";
import cart from '../images/cartW.svg'
import ProductList from "../components/MainPage/lists/ProductList";
import {connect} from "react-redux";

class ProductPage extends React.Component{
    render() {

        const options = ["110г.", "150г.", "250г."];
        const data = [
            {"type":"Производитель", "data":"Латвия"},
            {"type":"Состав", "data":"Морская соль, масло лаванды"},
            {"type":"Тип аромата", "data":"Лаванда"},
            {"type":"Тип кожи", "data":"Все типы"},
            {"type":"Бренд", "data":"Aura Cacia"},
            {"type":"Для кого", "data":"Унисекс"},
        ]
        const more = {
            name: 'Другие товары из категории',
            data: [
                { img: 'https://s3.images-iherb.com/aur/aur91696/y/14.jpg', name: 'Английская соль для ванн Relaxing Lavender, 110 г', link: '#', art: '12414405', price:'120', status: true },
                { img: 'https://s3.images-iherb.com/peo/peo59610/y/2.jpg', name: 'Клюква сушеная', link: '#', art: '12414405', price:'120', status: true },
                { img: 'https://s3.images-iherb.com/cgn/cgn01756/y/0.jpg', name: 'Чай травяной', link: '#', art: '12414405', price:'120', status: false },
            ]
        }

        const { product } = this.props;

        return (
            <ProductPageContainer>

                <TopContainer>
                    <ProductPageHeader>{product.name}</ProductPageHeader>
                    <ProductPageArt>Артикул: {product.art}</ProductPageArt>
                </TopContainer>


                <SmallInfoContainer>

                    <ImagesContainer>
                        <SmallImageContainer>
                            <SmallImage src={product.images[0].src} alt='Английская соль для ванн Relaxing Lavender'/>
                            <SmallImage src={product.images[1].src} alt='Английская соль для ванн Relaxing Lavender'/>
                        </SmallImageContainer>
                        <BigImage src={product.images[2].src} alt='Английская соль для ванн Relaxing Lavender'/>
                    </ImagesContainer>


                    <SmallInfo>
                        <ProductPageArtSm>Артикул: {product.art}</ProductPageArtSm>
                        <SmallInfoPrice>{product.price} грн.</SmallInfoPrice>
                        <SmallInfoStatus>В наличии</SmallInfoStatus>
                        <SmallInfoText>{product.smallInfo}</SmallInfoText>

                        <Select width='400px' option={product.options}/>

                        <SmallInfoCount>
                            <Count/>
                        </SmallInfoCount>
                        <ShopButton green href='#' text='Заказать' image={cart} width='272'/>
                    </SmallInfo>

                    <SmallInfoWish><img src={wish} alt='wish'/></SmallInfoWish>

                </SmallInfoContainer>

                <BigInfoContainer>
                    <BigInfoHeader>Характеристики</BigInfoHeader>
                    <BigInfoText>{product.features.text}</BigInfoText>

                    <BigInfoTable>
                        {product.features.data.map(e => (
                            <BigInfoRow>
                                <BigInfoTypeColumn>{e.type}</BigInfoTypeColumn>
                                <BigInfoDataColumn>{e.data}</BigInfoDataColumn>
                            </BigInfoRow>
                        ))}

                    </BigInfoTable>
                </BigInfoContainer>

                {/*<ProductList data={product.more }/>*/}

            </ProductPageContainer>
        )
    }
}

export default connect(
    ({product: { product }}) => ({
        product
    })
)(ProductPage)