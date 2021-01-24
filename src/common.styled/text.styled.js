import styled from 'styled-components'
import {blackText, green, textAdditional} from "./colors.styled";

export const StyledProductStatus = styled.span`
  font-family: Noto Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: ${green};
`

export const StyledProductArt = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${textAdditional};
`

export const StyledProductPrice = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: ${blackText};
`

export const NewsTxt = styled.span`
  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
`

export const LureFont = styled.p`
  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`

export const ManFont = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
`

export const NotFoundTxt = styled.span`
  font-family: Noto Sans;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`