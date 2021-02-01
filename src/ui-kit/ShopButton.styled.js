import styled from 'styled-components';
import {blackHeading, green} from "../common.styled/colors.styled";

export const ShopButtonBase = styled.a`
  display: block;
  padding: 17px 0 18px 0;
  ${(props)=> `width: ${props.width}px;`};
  ${(props)=> `margin: ${props.margin};`};


  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  
  border-radius: 70px;
  
  transition: all 0.1s ease-in;
  
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 8px rgba(77, 136, 17, 0.55));
  }
`

export const ButtonGreen = styled(ShopButtonBase)`
  background: ${green};
  color: #FFF;
  
`

export const ButtonWhite = styled(ShopButtonBase)`
  background: #FFF;
  color: ${green};
  border: 1px solid ${green};
`

export const ButtonBlack = styled(ShopButtonBase)`
  color: ${blackHeading};
  background: #FFF;
`