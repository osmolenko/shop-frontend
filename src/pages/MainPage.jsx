import React from 'react'
import {MainPageContainer} from "./MainPage.styled";
import Header from "../components/header/Header";
import Slider from "../components/MainPage/slider/Slider";
import News from "../components/MainPage/news/News";
import Lure from "../components/MainPage/lure/Lure";
import Manufacturers from "../components/MainPage/manufacturers/Manufacturers";
import ContactUs from "../components/MainPage/contactUs/ContactUs";
import {Footer} from "../components/footer/Footer";
import CatList from "../components/MainPage/lists/CatList";
import ProductList from "../components/MainPage/lists/ProductList";
import NavBarMobile from "../components/header/NavBarMobile";
import {NavBarContainer} from "../components/header/NavBar.styled";
import {connect} from "react-redux";


class MainPage extends React.Component{


    render(){
        const categories = {
            name: 'Каталог товаров',
            link: '#',
            data: [
                { img: 'https://shop.osmolenko.cloud/cats/1.png', name: 'Сухофрукты', link: '#' },
                { img: 'https://shop.osmolenko.cloud/cats/2.png', name: 'Товары для дома', link: '#' },
                { img: 'https://shop.osmolenko.cloud/cats/3.png', name: 'Полезные сладости', link: '#' },
                { img: 'https://shop.osmolenko.cloud/cats/4.png', name: 'Ароматерапия', link: '#' },
            ]
        }

        const sale = {
            name: 'Акции',
            data: [
                { img: 'https://s3.images-iherb.com/aur/aur91696/y/14.jpg', name: 'Английская соль для ванн Relaxing Lavender, 110 г', link: '#', art: '12414405', price:'120', status: true },
                { img: 'https://s3.images-iherb.com/peo/peo59610/y/2.jpg', name: 'Клюква сушеная', link: '#', art: '12414405', price:'120', status: true },
                { img: 'https://s3.images-iherb.com/cgn/cgn01756/y/0.jpg', name: 'Чай травяной', link: '#', art: '12414405', price:'120', status: false },
            ]
        }

        const manList = ['ABONETT, Венгрия', 'Almawin, Германия', 'Amelon, Иран', 'Amma, Индия/Украина', 'Фрея, Украина', 'August, Украина', 'BDJO.honey, Украина', 'Almawin, Германия', 'Bio Levante, Италия', 'Bio Nota, Польша', 'Bio Planer, Польша', 'Biomir, Украина', 'Фрея, Украина', 'Vivo, Украина', 'Vins, Украина', 'Biomir, Украина', 'De La Mark, Украина', 'Deo, Болгария', 'EasyGreen, США', 'Eco Panda, Австрия']

        const { navbarExpand } = this.props;

        return(
            <MainPageContainer>
                {navbarExpand ? '' : ''}

                <Header/>
                <Slider/>
                <CatList data={categories}/>
                <ProductList data={sale}/>
                <News/>
                <Lure/>
                <Manufacturers data={manList}/>
                <ContactUs/>
                <Footer/>
            </MainPageContainer>
        )
    }
}

export default connect(({navbar: navbarExpand}) => ({
    navbarExpand
}), null)(MainPage)