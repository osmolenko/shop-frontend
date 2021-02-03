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
import {MainPageContainer} from "./MainPage.styled";

export default class ProductPage extends React.Component{
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

        return (
            <ProductPageContainer>

                <TopContainer>
                    <ProductPageHeader>Английская соль для ванн Relaxing Lavender </ProductPageHeader>
                    <ProductPageArt>Артикул: 12414405</ProductPageArt>
                </TopContainer>


                <SmallInfoContainer>

                    <ImagesContainer>
                        <SmallImageContainer>
                            <SmallImage src='https://s3.images-iherb.com/aur/aur91696/y/14.jpg' alt='Английская соль для ванн Relaxing Lavender'/>
                            <SmallImage src='https://s3.images-iherb.com/aur/aur91696/y/14.jpg' alt='Английская соль для ванн Relaxing Lavender'/>
                        </SmallImageContainer>
                        <BigImage src='https://s3.images-iherb.com/aur/aur91696/y/14.jpg' alt='Английская соль для ванн Relaxing Lavender'/>
                    </ImagesContainer>


                    <SmallInfo>
                        <ProductPageArtSm>Артикул: 12414405</ProductPageArtSm>
                        <SmallInfoPrice>120 грн.</SmallInfoPrice>
                        <SmallInfoStatus>В наличии</SmallInfoStatus>
                        <SmallInfoText>
                            Морская соль - это богатый природный концентрат соли и микроэлементов, необходимых для нормальной работы всех органов тела. Благодаря тонизирующей действия, лаванда справедливо считается «растением № 1» в ароматерапии.
                        </SmallInfoText>

                        <Select option={options}/>

                        <SmallInfoCount>
                            <Count/>
                        </SmallInfoCount>
                        <ShopButton green href='#' text='Заказать' image={cart} width='272'/>
                    </SmallInfo>

                    <SmallInfoWish><img src={wish} alt='wish'/></SmallInfoWish>

                </SmallInfoContainer>

                <BigInfoContainer>
                    <BigInfoHeader>Характеристики</BigInfoHeader>
                    <BigInfoText>
                        Эфирное масло лаванды помогает при бессоннице, подавленном состоянии, головной боли. Кроме того, масло лаванды является незаменимым помощником для ухода за проблемной кожей, в лечении ран. Ароматная ванна снимает усталость, стрессовое напряжение, повышает работоспособность и улучшает настроение.
                        <p/>
                        Растворите морскую соль в теплой воде (35 ÷ 40 ° C) из расчета 80-500 г на ванну. Для принятия местных ванн соль растворить в воде из расчета 100 г на 0,4-8,0 л воды (35 ÷ 40 ° C) .Приймайте ванну 15 минут. Ополосниться проточной водой. Не пользуйтесь мылом. После солевой ванны полежите 20 минут. Рекомендуется курс 8-10 ванн в течение 14-20 дней.
                    </BigInfoText>

                    <BigInfoTable>
                        {data.map(e => (
                            <BigInfoRow>
                                <BigInfoTypeColumn>{e.type}</BigInfoTypeColumn>
                                <BigInfoDataColumn>{e.data}</BigInfoDataColumn>
                            </BigInfoRow>
                        ))}

                    </BigInfoTable>
                </BigInfoContainer>

                <ProductList data={more}/>







            </ProductPageContainer>
        )
    }
}