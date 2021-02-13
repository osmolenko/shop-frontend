import styled from 'styled-components';
import {blackHeading, blackText, border, green, orderActiveBg, ordertext} from "../common.styled/colors.styled";
import {device} from "../common.styled/media.styled";

export const OrderContainer = styled.div`
  margin: 60px 60px 90px 60px;

  @media ${device.tablet} {
    margin: 60px 28px 90px 28px;
  }

  @media ${device.mobile} {
    margin: 64px 16px 55px 16px;
  }
`

export const OrderHeader = styled.h3`
  color: ${blackHeading};
  margin-block: 0 !important;

  @media ${device.mobile} {
    margin-block-end: 20px !important;
  }
`

export const OrderBlockContainer = styled.section`
  display: grid;
  grid-template-areas: "number head" "number data";
  grid-template-columns: 46px 90%;
  
  margin-bottom: 50px;
  border-top: 1px solid ${border};

  @media ${device.tablet} {
    grid-template-areas: "number head" "data data";
    grid-template-columns: 46px 90%;

  }
`

export const OrderHead = styled.h4`
  grid-area: number;
  color: ${blackText};
`

export const OrderHeadText = styled.h4`
  grid-area: head;
  color: ${blackText};
`

export const OrderGroup = styled.div`
  grid-area: data;

`

export const InputGroup = styled.div`
    
`

export const InputLabel = styled.label`
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
  color: ${ordertext};
`

export const OrderInput = styled.input`
  display: block;
  margin: 15px 0 25px 0;
  padding: 15px 16px 16px 16px;
  width: 700px;
  border: 1px solid ${border};

  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media ${device.tablet} {
    width: 650px;
  }

  @media ${device.mobile} {
    width: 353px;
  }
`

export const RadioContainer = styled.div`
  cursor: pointer;
  border: 1px solid ${green};
  padding: 0 22px 0 20px;
  width: 700px;
  margin-bottom: 25px;
  
  background-color: ${(props)=> props.active ? orderActiveBg : ''};
  
  transition: all 0.5s ease;
  
  min-height: 83px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;  
  
  &:last-child {
    margin: 0;
  }

  @media ${device.tablet} {
    width: 650px;
  }

  @media ${device.mobile} {
    padding: 16px 35px 20px 20px;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 340px;
  }
`

export const RadioHead = styled.span`
  display: block;
  
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  
  color: ${blackText};
  
  &:first-child {
    margin-bottom: 3px;
  }

`

export const RadioSubhead = styled(RadioHead)`
  color: ${ordertext};
`

export const RadioInput = styled(OrderInput)`
  width: 645px;
  margin: 0 0 15px 0;;
  
  &:last-child {
    margin: 0;
  }

  @media ${device.tablet} {
    width: 630px;
  }

  @media ${device.mobile} {
    width: 290px;
  }

`

export const RadioChoose = styled.div`
  border: 1px solid ${green};
  border-top-style: none;
  width: 700px;
  margin-top: -25px;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;


  padding: 25px 22px 28px 20px;

  @media ${device.tablet} {
    width: 650px;
    padding: 25px 22px 28px 20px;
  }

  @media ${device.mobile} {
    width: 353px;
  }
  
`
