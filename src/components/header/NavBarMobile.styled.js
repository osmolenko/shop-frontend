import styled from 'styled-components';
import {CartButton, NavBarButton, SearchButton, SearchContainer, SearchInput, WishButton} from "./NavBar.styled";
import {device} from "../../common.styled/media.styled";

export const NavBarMobileContainer = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: url('https://shop.osmolenko.cloud/openMenu.png') no-repeat;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  
`

export const NavBarMobileTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 8px 0 28px;
`

export const NavBarMobileButtonsContainer = styled(NavBarMobileTopContainer)`
  margin: 0;
  padding: 0;
`

export const NavBarMobileLogo = styled.img`
`

export const NavBarMobileCloseButton = styled(NavBarButton)`
  background: none;
  border: none;
`

export const NavBarMobileLinksContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 221px;
  
  @media ${device.mobile} {
    margin-top: 28px;
  }
`

export const NavBarMobileLink = styled.a`
  color: #FFF;
  margin-bottom: 55px;
  
  @media ${device.tablet} {
    font-family: 'Exo 2';
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0em;
  }

  @media ${device.mobile} {
    font-family: 'Exo 2';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
  }
`

export const NavBarMobileWishButton = styled(WishButton)`
  
`

export const NavBarMobileCartButton = styled(CartButton)`

`

export const NavBarMobileSearchContainer = styled(SearchContainer)`
  display: none;
  
  @media ${device.mobile} {
    background: #FFF;
    margin-bottom: 63px;
    display: block;
  }
`

export const NavBarMobileSearchInput = styled(SearchInput)`
  @media ${device.mobile} {
    min-width: 250px;
  }
`

export const NavBarMobileSearchButton = styled(SearchButton)`
  
`
