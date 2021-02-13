import styled from 'styled-components';
import {blackHeading, border} from "../common.styled/colors.styled";
import {NewsTxt, StyledProductArt} from "../common.styled/text.styled";
import {CountContainer} from "../components/product/Product.styled";
import {device} from "../common.styled/media.styled";

export const CartContainer = styled.div`
  padding: 50px 60px 90px 60px;
  
  @media ${device.tablet} {
    padding: 50px 28px 90px 28px;
  }
`

export const CartHeader = styled.h3`
  color: ${blackHeading};
`

export const CartTable = styled.table`
    display: block;
`

export const CartTableRow = styled.tr`
  border-bottom: 1px solid ${border};
  display: grid;
  grid-template-areas: "product price qua all delete";
  grid-template-columns: 40% 20% 25% 10% 5%;
  
  @media ${device.tablet} {
    grid-template-areas: "product qua all delete";
    grid-template-columns: 40% 25% 10% 5%;

  }
`

export const CartTableHead = styled.th`
  margin-bottom: 10px;

  &:nth-child(3) {
    margin-left: 12%;
  }
  
  @media ${device.tablet} {
    &:nth-child(2){
      display: none;
    }
  }

`

export const CartTableHeadText = styled.h5`
  color: rgba(38, 38, 38, 0.3);
  text-align: left;
  margin-block: 0;
`

export const CartTableContent = styled.td`
  padding: 20px 0;
`

export const CartProductContainer = styled.div`
  display: flex;
  justify-items: flex-start;
`

export const Product = styled(CartProductContainer)`
  width: 490px;
  grid-area: product;
`

export const CartProductImage = styled.img`
  max-width: 120px;
  max-height: 120px;
  
  @media ${device.tablet} {
    max-width: 80px;
    max-height: 80px;
  }
`

export const CartProductTextContainer = styled.div`
  margin: 10px 0 0 25px;
`

export const CartProductName = styled(NewsTxt)`
  display: block; 
  font-weight: 600;
  width: 260px;
  
  @media ${device.tablet} {
    width: 230px;
  }
`

export const CartProductArt = styled(StyledProductArt)`
  display: block;
  margin-top: 15px;
`

export const Price = styled(CartProductContainer)`
  grid-area: price;
  margin: 10px 0 0 0;
  
  & > span {
    font-weight: 700;
  }
  
  @media ${device.tablet} {
    display: none;
  }

`

export const QuantityContainer = styled(CartProductContainer)`
    grid-area: qua;
`

export const Quantity = styled(CountContainer)`
  width: 9rem;

  & > div {
    width: 9rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`

export const All = styled(CartProductContainer)`
  grid-area: all;
  margin: 10px 0 0 0;

  & > span {
    font-weight: 700;
  }
`

export const Remove = styled(CartProductContainer)`
  margin-top: 18px;
  grid-area: delete;
  display: flex;
  justify-content: flex-end;
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const RemoveImg = styled.img`
  height: 17.309627532958984px;
  width: 18.000246047973633px;
`

export const SummonContainer = styled.div`
  
  margin-top: 40px;
  
  display: grid;
  grid-template-areas: ". summtext summint" ". buttons buttons";
  grid-template-columns: 60% 25% 15%;
  align-items: end;
  
  @media ${device.tablet} {
    grid-template-areas: "summtext summint" "buttons buttons";
    grid-template-columns: 45% 35%;
  }
`

export const SummonCell = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid ${border};
`

export const SummonText = styled(SummonCell)`
  grid-area: summtext;
`

export const SummonInt = styled(SummonCell)`
  grid-area: summint;
`

export const SummonButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  margin-top: 35px;
`






