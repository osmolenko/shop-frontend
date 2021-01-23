import React from 'react'
import {LureContainer, LureText, LureTextContainer, LureTextHeader} from "./Lure.styled";

export default class Lure extends React.Component{
    render(){
        return(
            <LureContainer>
                <LureTextContainer>
                    <LureTextHeader>Почему клиенты выбирают нас</LureTextHeader>
                    <LureText>
                        Наш эко магазин предлагает лучшую органическую натуральную продукцию, все преимущества которой безусловно оценят те, кто считает себя людьми ответственными, кто не относится к природе потребительски.
                    </LureText>
                    <LureText>
                        Качественные и, главное, безопасные для здоровья, экотовары от надежных зарубежных и отечественных производителей, представлены в широчайшем ассортименте.
                    </LureText>
                    <LureText>
                        Органическую косметику, натуральные средства для стирки и уборки без агрессивных и вредных ингредиентов, замечательные товары для малышей и их мам, а также чистейшие эко продукты вы можете легко купить у нас.
                    </LureText>
                </LureTextContainer>
            </LureContainer>
        )
    }
}