import styled from 'styled-components'
import {blackText, catsLink, greenCart} from "./colors.styled";


export const headerBlackLink = styled.a`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${blackText};
`

export const headerGreenLink = styled(headerBlackLink)`
  color: ${greenCart};
`

export const catLink = styled.a`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: ${catsLink};
`
