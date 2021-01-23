import styled from 'styled-components'
import {blackText} from "../../common.styled/colors.styled";
import {device} from "../../common.styled/media.styled";

export const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${blackText};
  padding: 12px 40px 22px 40px;
  
  @media ${device.mobile} {
    flex-direction: column;
  }
`

export const FooterBottomText = styled.span`
  font-family: Noto Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;

  color: #DBDBDB;

  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`

export const FooterBottomLink = styled.a`
  font-family: Noto Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;


  outline: 0;
  color: #DBDBDB;

  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`