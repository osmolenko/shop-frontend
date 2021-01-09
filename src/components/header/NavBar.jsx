import React from 'react'
import {
    CartButton,
    Link, LinkContainer,
    NavBarContainer,
    SearchButton,
    SearchContainer,
    SearchInput,
    WishButton
} from "./NavBar.styled";
import search from '../../images/search.svg'
import wish from '../../images/wish.svg'
import cart from '../../images/cart.svg'
import arrowDown from '../../images/arrow-down.svg'

export default class NavBar extends React.Component{
    render(){
        return(
            <NavBarContainer>
                <h3 href='#'>Logo</h3>
                <LinkContainer>

                    <Link href='#'>Категории <img src={arrowDown}/></Link>
                    <Link href='#'>Про нас</Link>
                    <Link href='#'>Доставка и оплата</Link>
                    <Link href='#'>Контакты</Link>

                    <SearchContainer>
                        <SearchInput placeholder='Поиск...'/>
                        <SearchButton><img src={search} alt='Search'/></SearchButton>
                    </SearchContainer>

                    <WishButton><img src={wish} alt='Wishlist'/></WishButton>
                    <CartButton><img src={cart} alt='Wishlist'/></CartButton>

                </LinkContainer>
            </NavBarContainer>
        )
    }
}