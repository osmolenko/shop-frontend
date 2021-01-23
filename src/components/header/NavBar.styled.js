import styled from 'styled-components'
import {blackText, greenCart, greyBg, lightGreyInput} from "../../common.styled/colors.styled";
import {headerBlackLink, headerGreenLink} from "../../common.styled/links.styled";
import {searchInput} from "../../common.styled/inputs.styled";
import {device} from "../../common.styled/media.styled";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 86px;
  padding: 0 40px 0 60px;
  
  @media ${device.tablet} {
    padding: 0 28px;
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LinkContainer = styled(DataContainer)`

  @media ${device.tablet} {
    display: none;
  }
`

export const Link = styled(headerBlackLink)`
  text-decoration: none;
  margin-right: 48px;
  
`

export const GreenLink = styled(Link)`
  color: ${greenCart};
`

export const SearchContainer = styled.div`
  height: 48px;
  border: 1px solid ${lightGreyInput};
  box-sizing: border-box;
  border-radius: 28px;
  padding: 11px 17px 13px 24px;
  margin-right: 20px;

  @media ${device.mobile} {
    display: none;
  }
`

export const SearchInput = styled(searchInput)` 
  border: none; 
  outline: 0; 
`

export const SearchButton = styled.button`
  border: none;
  background: none;
  border-left: 1px solid ${lightGreyInput};
  padding-left: 16px;
`

export const NavBarButton = styled.button`
  height: 48px;
  width: 48px;
  margin-right: 20px;
  
  @media ${device.mobile} {
    height: 34px;
    width: 34px;
    margin-right: 15px;
  }
`

export const WishButton = styled(NavBarButton)`
  background: ${greyBg};
  border: none;
  border-radius: 50%;
  & > img {
    height: 15.318750381469727px;
    width: 17.479999542236328px;
  }
`

export const CartButton = styled(NavBarButton)`
  background: white;
  border: 1px solid ${greenCart};
  box-sizing: border-box;
  border-radius: 50%;
  & > img {
    height: 15.750001907348633px;
    width: 15.747169494628906px;
  }
`

export const HamburgerButton = styled(NavBarButton)`
  display: none;
  background: none;
  border: none;
  & > img {
    height: 24px;
    width: 44px;
  }
  
  @media ${device.tablet} {
    display: block;
  }
  
  @media ${device.mobile} {
    & > img {
      height: 21px;
      width: 35px;
    }
  }
`