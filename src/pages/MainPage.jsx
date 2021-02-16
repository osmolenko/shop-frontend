import React from 'react'
import {MainPageContainer} from "./MainPage.styled";
import Slider from "../components/MainPage/slider/Slider";
import News from "../components/MainPage/news/News";
import Lure from "../components/MainPage/lure/Lure";
import Manufacturers from "../components/MainPage/manufacturers/Manufacturers";
import ContactUs from "../components/MainPage/contactUs/ContactUs";
import CatList from "../components/MainPage/lists/CatList";
import ProductList from "../components/MainPage/lists/ProductList";
import cato from '../images/cats/1.png'
import catt from '../images/cats/2.png'
import cath from '../images/cats/3.png'
import catf from '../images/cats/4.png'
import {connect} from "react-redux";



class MainPage extends React.Component{


    render(){
        const categories = {
            name: 'Каталог товаров',
            link: '#',
            data: [
                { img: cato, name: 'Сухофрукты', link: '#' },
                { img: catt, name: 'Товары для дома', link: '#' },
                { img: cath, name: 'Полезные сладости', link: '#' },
                { img: catf, name: 'Ароматерапия', link: '#' },
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

        return(
            <MainPageContainer>
                <Slider/>
                <CatList data={categories}/>
                <ProductList data={sale}/>
                <News/>
                <Lure/>
                <Manufacturers data={manList}/>
                <ContactUs/>
            </MainPageContainer>
        )
    }
}

export default connect(
    ({ navbar: {catsExpand}}) => ({
        catsExpand
    })
)(MainPage);