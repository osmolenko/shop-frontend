import styled from 'styled-components';
import {NewsTxt, PriceTxt, StyledProductArt, StyledProductStatus} from "../common.styled/text.styled";
import {blackHeading, blackText} from "../common.styled/colors.styled";
import {WishButton} from "../components/header/NavBar.styled";
import {CountContainer, ProductStatus} from "../components/product/Product.styled";
import {device} from "../common.styled/media.styled";

export const ProductPageContainer = styled.div`
  margin-bottom: 90px;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 30px 60px 10px 30px;
  
  @media ${device.tablet} {
    margin: 30px 28px 25px 28px;
  }
`

export const ProductPageHeader = styled.h3`
  color: ${blackHeading};
  margin-left: 30px;
`

export const ProductPageArt = styled(StyledProductArt)`
  font-size: 16px;
  
  @media ${device.tablet} {
    display: none;
  }
`

export const ProductPageArtSm = styled(ProductPageArt)`
  display: none;
  @media ${device.tablet} {
    display: block;
    margin-bottom: 25px;
  }
`

export const SmallInfoContainer = styled.div`
  display: grid;
  grid-template-areas: "image info wish";
  grid-template-columns: 50% 43% 7%;
  border-top: 1px solid #DFDFE0;
  border-bottom: 1px solid #DFDFE0;
  
  @media ${device.tablet}{
    grid-template-areas: "image image" "info wish";
    grid-template-columns: 85% 15%;
  }

`

export const ImagesContainer = styled.div`
  grid-area: image;
  display: grid;
  grid-template-areas: "smallimage bigimage";
  border-right: 1px solid #DFDFE0;;
  padding: 72px 27px 152px 74px;
  
  @media ${device.tablet} {
    padding: 50px 28px 50px 28px;
  }
`

export const SmallImageContainer = styled.div`
  grid-area: smallimage;
  display: flex;
  flex-direction: column;
`

export const SmallImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  
  @media ${device.mobile} {
    max-width: 85px;
    max-height: 85px;
  }
`

export const BigImage = styled.img`
  grid-area: bigimage;
  max-width: 400px;
  max-height: 400px;

  @media ${device.mobile} {
    max-width: 200px;
    max-height: 200px;
  }
`

export const SmallInfo = styled.div`
  padding: 90px 60px 60px 129px;
  grid-area: info;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 40px 28px 50px 28px;
  }
`

export const SmallInfoWish = styled(WishButton)`
  grid-area: wish;
  margin-top: 30px;
  height: 60px;
  width: 60px;
  
  & > img {
    height: 19.1484375px;
    width: 21.850000381469727px;
  }
  
  @media ${device.mobile} {
    height: 48px;
    width: 48px;
    
    & > img {
      height: 15.31874942779541px;
      width: 17.48000144958496px;
    }
  }
`

export const SmallInfoPrice = styled(PriceTxt)`
  color: ${blackText};
  margin-bottom: 10px;
`

export const SmallInfoStatus = styled(ProductStatus)`
  margin-bottom: 35px;
`

export const SmallInfoText = styled(StyledProductStatus)`
  color: rgba(71, 71, 71, 0.81);
  font-weight: 400;
  margin-bottom: 35px;
`

export const SmallInfoCount = styled(CountContainer)`
  width: 25rem;
  
  margin-bottom: 20px;
  
  & > div {
    width: 25rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  
  @media ${device.tablet} {
    width: 35rem;

    & > div {
      width: 35rem;
    }
  }

  @media ${device.mobile} {
    width: 20rem;

    & > div {
      width: 20rem;
    }
  }
`

export const BigInfoContainer = styled.div`
  display: grid;
  grid-template-areas: "har har" "bigtext table";
  grid-column-gap: 10%;
  grid-template-columns: 50% 40%;
  border-bottom: 1px solid #DFDFE0;
  padding: 50px 100px 50px 60px;
  
  @media ${device.tablet} {
    grid-template-areas: "har" "bigtext" "table";
    grid-column-gap: 0;
    grid-template-columns: 100%;
  }

  @media ${device.mobile} {
    padding: 35px 16px 36px 16px;
  }
`

export const BigInfoHeader = styled.h4`
  grid-area: har;
  color: ${blackHeading};
`

export const BigInfoText = styled(NewsTxt)`
  grid-area: bigtext;
  color: rgba(71, 71, 71, 0.81);
  
  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`

export const BigInfoTable = styled.table`
  grid-area: table;
`
export const BigInfoRow = styled.tr`

`

export const BigInfoTypeColumn = styled.td`
  font-family: 'Exo 2';
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 41px;
  color: rgba(38, 38, 38, 0.3);
  
  @media ${device.mobile} {
    padding-right: 30px;
  }
  
`

export const BigInfoDataColumn = styled.td`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 150%;
  color: rgba(71, 71, 71, 0.81);
`

export const MoreContainer = styled.div`
  padding: 80px 60px 90px 60px;
`

export const MoreHeader = styled.h3`
  color: ${blackHeading};
`