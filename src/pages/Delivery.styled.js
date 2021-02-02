import styled from 'styled-components'
import {blackHeading, lightGreen, textAdditional} from "../common.styled/colors.styled";

export const DeliveryBlockContainer = styled.div`
  display: flex;
  padding: 60px 66px 90px 60px;
  justify-content: space-between;
`

export const DeliveryContainer = styled.div`
  
`

export const HeaderText = styled.h3`
  color: ${blackHeading};
`

export const SubHeaderText = styled.h5`

`

export const TableContainer = styled.div`
  border: 1px solid ${lightGreen};
  
  margin-bottom: 20px;
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
`

export const TableOrderColumn = styled.div`
  grid-area: order;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  & > img{
    margin-right: 10px;
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
  margin-left: 30px;
`

export const PayMethodContainer = styled.div`
  display: grid;
  grid-template-areas: "boldtext text";
  grid-column-gap: 20px;
  grid-template-columns: 160px 420px;
  margin-bottom: 30px;
`

export const BoldDataText = styled(DataText)`
  grid-area: boldtext;
  font-weight: 600;
`