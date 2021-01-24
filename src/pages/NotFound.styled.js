import styled from 'styled-components'
import {device} from "../common.styled/media.styled";
import {NotFoundTxt} from "../common.styled/text.styled";
import {blackHeading, green, textGrey} from "../common.styled/colors.styled";

export const NotFoundContainer  = styled.div`
  display: grid;
  grid-template-areas: 'info . image';
  grid-template-columns: 420px 110px 675px;
  padding: 106px 80px 106px 143px;

  background-image: url(https://shop.osmolenko.cloud/404/404-lg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.tablet} {
    background-image: url(https://shop.osmolenko.cloud/404/404-md.png);
    padding: 80px 40px 83px 53px;


    grid-template-areas: 'info' 'image';
    grid-template-columns: auto;

  }

  @media ${device.mobile} {
    background-image: url(https://shop.osmolenko.cloud/404/404-sm.png);
    padding: 51px 0 71px 0;

  }
`

export const NotFoundInfoContainer = styled.div`
  grid-area: info;
  
  @media ${device.tablet} {
    justify-self: center;
    width: 410px !important;
  }

  @media ${device.tablet} {
    width: auto;
    margin: 0 16px;
  }
`

export const NotFoundHeader = styled.h1`
  color: ${blackHeading};
`

export const NotFoundText = styled(NotFoundTxt)`
  display: block;
  color: ${textGrey};
  margin: 40px 0 42px 0;
`

export const NotFoundButton = styled.button`
  display: block;
  height: 60px;
  width: 262px;
  outline: 0;
  border: 0;
  background-color: ${green};
  color: #FFF;
  border-radius: 70px;
  text-align: center;

  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;

  @media ${device.mobile} {
    width: 100%;
  }
`

export const NotFoundImage = styled.img`
  height: 249px;
  width: 675.35791015625px;
  grid-area: image;
  align-self: center;
  justify-self: center;
  
  @media ${device.mobile} {
    width: 320px;
    height: 119px;
    margin-top: 35px;
  }
`