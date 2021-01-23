import styled from 'styled-components'
import {LureFont} from "../../../common.styled/text.styled";
import {device} from "../../../common.styled/media.styled";
import {blackText} from "../../../common.styled/colors.styled";

export const LureContainer = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  padding-top: 110px;
  background-image: url("https://shop.osmolenko.cloud/lure/lure2.png"), url("https://shop.osmolenko.cloud/lure/lure1.png");
  background-repeat: no-repeat;
  background-position: top 50px left 0px, bottom 32px right 0px;
  
  @media ${device.tablet} {
    padding: 292px 0 100px 0;
    background-position: top 90px left 0px, bottom 60px right 0px;
    background-size: 160px, 160px
  }

  @media ${device.mobile} {
    padding: 292px 0 200px 0;
    background-position: top 60px left -10px, bottom 50px right 0px;
    background-size: 160px, 160px
  }
`

export const LureTextContainer = styled.div`
  margin: 0 100px;
  width: 625px;
  
  @media ${device.mobile} {
    width: auto;
    margin: 0 9px 0 17px;
  }
`

export const LureTextHeader = styled.h2`
  margin-top: 55px;
  color: ${blackText};
`

export const LureText = styled(LureFont)`

`



