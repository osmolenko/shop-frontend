import React from 'react'
import {
    NavBarMobileButtonsContainer, NavBarMobileCartButton,
    NavBarMobileCloseButton,
    NavBarMobileContainer,
    NavBarMobileLink,
    NavBarMobileLinksContainer,
    NavBarMobileLogo, NavBarMobileSearchButton, NavBarMobileSearchContainer, NavBarMobileSearchInput,
    NavBarMobileTopContainer, NavBarMobileWishButton
} from "./NavBarMobile.styled";
import logo from '../../images/logo_white.svg'
import wish from '../../images/wish.svg'
import cart from '../../images/cart.svg'
import close from '../../images/close.svg'
import {connect} from "react-redux";
import {closeMobileNavbar} from "../../actions/navbar.action";
import search from "../../images/search.svg";

class NavBarMobile extends React.Component{
    render(){
        const { closeMobileNavbar } = this.props;
        return(
            <NavBarMobileContainer>

                <NavBarMobileTopContainer>

                    <NavBarMobileLogo src={logo} alt='logo'/>

                    <NavBarMobileButtonsContainer>
                        <NavBarMobileWishButton><img src={wish} alt='Wishlist'/></NavBarMobileWishButton>
                        <NavBarMobileCartButton><img src={cart} alt='Cart'/></NavBarMobileCartButton>
                        <NavBarMobileCloseButton onClick={closeMobileNavbar}><img src={close} alt='Close'/></NavBarMobileCloseButton>
                    </NavBarMobileButtonsContainer>

                </NavBarMobileTopContainer>

                <NavBarMobileLinksContainer>

                    <NavBarMobileSearchContainer>
                        <NavBarMobileSearchInput placeholder='Поиск...'/>
                        <NavBarMobileSearchButton><img src={search} alt='Search'/></NavBarMobileSearchButton>
                    </NavBarMobileSearchContainer>

                    <NavBarMobileLink href='#' onClick={closeMobileNavbar}>Каталог</NavBarMobileLink>
                    <NavBarMobileLink href='#' onClick={closeMobileNavbar}>Про нас</NavBarMobileLink>
                    <NavBarMobileLink href='#' onClick={closeMobileNavbar}>Доставка и оплата</NavBarMobileLink>
                    <NavBarMobileLink href='#' onClick={closeMobileNavbar}>Контакты</NavBarMobileLink>

                </NavBarMobileLinksContainer>

            </NavBarMobileContainer>
        )
    }
}

export default connect(null, { closeMobileNavbar })(NavBarMobile)