import styled from 'styled-components'
import {device} from "../common.styled/media.styled";
import {NotFoundText} from "./NotFound.styled";
import thanksLg from '../images/thanks/thanks-lg.png'
import thanksMd from '../images/thanks/thanks-md.png'
import thanksSm from '../images/thanks/thanks-sm.png'


export const ThanksContainer  = styled.div`
  display: flex;
  padding: 106px 80px 106px 143px;
  flex-flow: column nowrap;

  background-image: url(${thanksLg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.tablet} {
    background-image: url(${thanksMd});
    padding: 80px 40px 83px 53px;
  }

  @media ${device.mobile} {
    background-image: url(${thanksSm});
    padding: 51px 16px 71px 16px;
  }
`

export const DataContainer = styled.div`
  width: 565px;

  @media ${device.tablet} {
    width: auto;
  }
  
`

export const ThanksHeader = styled.h1`
  color: #FFF;
`

export const ThanksText = styled(NotFoundText)`
  color: #FFF;
`
