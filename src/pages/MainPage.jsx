import React from 'react'
import {MainPageContainer} from "./MainPage.styled";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import CardList from "../components/cards/CardList";
import Tagline from "../components/tagline/Tagline";
import Lure from "../components/lure/Lure";
import Manufacturers from "../components/manufacturers/Manufacturers";
import ContactUs from "../components/contactUs/ContactUs";
import {Footer} from "../components/footer/Footer";


export default class MainPage extends React.Component{


    render(){
        const categories = {
            name: 'Категории товаров',
            link: '#',
            data: [
                { img: 'https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg', name: 'Сладости', link: '#' },
                { img: 'https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg', name: 'Товары для дома', link: '#' },
                { img: 'https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg', name: 'Ароматерапия', link: '#' },
                ]
        }

        const sale = {
            name: 'Акции',
            data: [
                { img: 'https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg', name: 'Английская соль', link: '#' },
                { img: 'https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg', name: 'Клюква сушеная', link: '#' },
                { img: 'https://images.wallpaperscraft.ru/image/siluet_zakat_gorizont_125008_1600x900.jpg', name: 'Чай травяной', link: '#' },
            ]
        }

        const manList = ['Lorem ipsum dolor', 'Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor']

        return(
            <MainPageContainer>
                <Header/>
                <Slider/>
                <CardList data={categories}/>
                <CardList data={sale}/>
                <Tagline text='Слоган'/>
                <Lure/>
                <Manufacturers data={manList}/>
                <ContactUs/>
                <Footer/>
            </MainPageContainer>
        )
    }
}