import styled from "styled-components";
import {StyledProductArt, StyledProductPrice, StyledProductStatus} from "../../common.styled/text.styled";
import {blackText, green, greyBg} from "../../common.styled/colors.styled";
import {searchInput} from "../../common.styled/inputs.styled";
import {catLink} from "../../common.styled/links.styled";
import {device} from "../../common.styled/media.styled";

export const ProductContainer = styled.div`
  width: 300px;
  padding: 20px 19px 24px 19px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  margin-right: 27px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  
  @media ${device.tablet} {
    margin: 0 18px 18px 0;
  }
`

export const WishButton = styled.button`
  float: right;
  background: none;
  border: none;
  & > img {
    height: 23.38125228881836px;
    width: 26.67999839782715px;
    z-index: 9;
  }
`
export const ProductImageContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 150px;
  grid-template-rows: auto;
  grid-template-areas: 
    "smallImage bigImage"
;
`

export const ProductSmallImageContainer = styled.div`
  grid-area: smallImage;
`

export const ProductSmallImage = styled.img`
  max-width: 70px;
  max-height: 70px;
`

export const ProductBigImage = styled.img`
  grid-area: bigImage;
  max-width: 150px;
  max-height: 150px;
`

export const ProductDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "productStatus productArt"
    "productName productName";
  align-items: end;
  margin-top: 15px;
`

export const ProductStatus = styled(StyledProductStatus)`
  grid-area: productStatus;
  ${(props)=> props.red ? 'color: red;' : ''}
`

export const ProductArt = styled(StyledProductArt)`
  grid-area: productArt;
  justify-self: end;
`

export const ProductName = styled.h3`
  grid-area: productName;
  font-size: 17px;
  line-height: 26.35px;
  color: ${blackText};
  max-width: 260px;
`

export const Hr = styled.hr`
  margin: 20px 0 20px 0;
  border: 1px solid #DFDFE0;
`

export const BottomContainer = styled.div`
  justify-self: flex-end;
`

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Price = styled(StyledProductPrice)`
  
`

export const CountContainer = styled.div`
  float: right;
  display: inline-flex;
  flex-flow: row nowrap;
  border: 1px solid #DFDFE0;
  box-sizing: border-box;
  border-radius: 32px;
  padding: 4px;
  margin-bottom: 20px;
`

export const PlusMinusButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  background ${greyBg};
  cursor: pointer;
`

export const CountInput = styled(searchInput)`
  outline: 0;
  border: 0;
  max-width: 25px;
  text-align: center;
  text-justify: distribute;
`

export const AddToCart = styled.button`
  height: 60px;
  width: 300px;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: ${green};
  border-radius: 70px;
  padding: 15px 85px 16px 85px;
  text-align: center;
  @media ${device.tablet} {
    padding: 15px 90px 16px 90px;
  }
`

export const AddToCartText = styled(catLink)`
  color: white;
`