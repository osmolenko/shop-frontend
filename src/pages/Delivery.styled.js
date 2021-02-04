import styled from 'styled-components'
import {blackHeading, lightGreen, textAdditional} from "../common.styled/colors.styled";
import {device} from "../common.styled/media.styled";
import background from '../images/delivery.png'

export const DeliveryBlockContainer = styled.div`
  display: grid;
  padding: 40px 66px 90px 60px;
  grid-template-areas: "delivery pay";
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right bottom;
  
  @media ${device.tablet}{
    grid-template-areas: "delivery" "pay";
    padding: 20px 28px 40px 28px;
  }
`

export const DeliveryContainer = styled.div`
  grid-area: delivery;
`

export const HeaderText = styled.h3`
  color: ${blackHeading};
`

export const SubHeaderText = styled.h5`

`

export const TableContainer = styled.div`
  border: 1px solid ${lightGreen};
  
  width: 570px;
  
  margin-bottom: 20px;
  
  @media ${device.tablet} {
    width: auto;
  }
`

export const TableRow = styled.div`
  padding: 20px 0 20px 22px;
  border-bottom: 1px solid ${lightGreen};
  display: grid;
  grid-template-areas: "order arrow delivery";
  grid-template-columns: 40% 10% 45%;
  grid-column-gap: 20px;
  
  &:nth-child(4){
    grid-template-areas: "order";
    grid-template-columns: 100%;
    border: none;
  }
  
  @media ${device.mobile} {
    grid-template-areas: "order" "arrow" "delivery";
    grid-template-columns: 100%;
    grid-template-rows: 10% 80% 10%;
    align-items: center;

    &:nth-child(4){
      grid-template-rows: 100%;
    }
  }
`

export const TableOrderColumn = styled.div`
  grid-area: order;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  & > img{
    margin-right: 10px;
  }
  
  @media ${device.mobile} {
    justify-content: center;
  }
`

export const TableDeliveryColumn = styled(TableOrderColumn)`
  grid-area: delivery;

`

export const TableArrowColumn = styled(TableOrderColumn)`
  grid-area: arrow;

    & > img{
      margin: 0;
    }
  @media ${device.mobile} {
    transform: rotate(90deg);
    padding: 20px;
  }
  
  
`

export const TextAdd = styled.span`
  font-family: Noto Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;

  color: ${textAdditional};
`


export const DataText = styled.span`
  grid-area: text;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 150%;
  
  color: ${blackHeading};
`

export const PayContainer = styled.div`
  grid-area: pay;
  margin-left: 30px;
  
  @media ${device.tablet} {
    margin: 0;
  }
`

export const PayMethodContainer = styled.div`
  display: grid;
  grid-template-areas: "boldtext text";
  grid-column-gap: 20px;
  grid-template-columns: 26% 74%;
  margin-bottom: 30px;
  
  @media ${device.tablet} {
    grid-template-columns: 30% 70%;
  }

  @media ${device.mobile} {
    grid-template-areas: "boldtext" "text";
    grid-template-columns: 100%;
  }
`

export const BoldDataText = styled(DataText)`
  grid-area: boldtext;
  font-weight: 600;
`