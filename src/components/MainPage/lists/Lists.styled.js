import styled from 'styled-components'
import {blackHeading} from "../../../common.styled/colors.styled";
import {headerBlackLink} from "../../../common.styled/links.styled";
import {device} from "../../../common.styled/media.styled";

export const CardListContainer = styled.div`
  margin: 50px 60px 0 60px;
  
  @media ${device.tablet} {
    margin: 50px 28px 0 28px;
  }
  
  @media ${device.mobile} {
    margin: 50px 16px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`

export const CardListHeader = styled.h2`
  color: ${blackHeading};
`

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  
  @media ${device.mobile} {
    flex-direction: column;
  }
`

export const CardMoreLink = styled(headerBlackLink)`
  cursor: pointer;
  
  @media ${device.mobile} {
    padding: 19px 77px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 70px;
    align-self: center;
  }
`

export const CardsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  
  @media ${device.tablet} {
    flex-flow: row ${(props)=> props.products ? 'wrap' : 'nowrap'};
    overflow: scroll;
    justify-content: ${(props)=> props.products ? 'center' : 'flex-start'} ;
  }
`
