import styled from 'styled-components'
import {lightGreyBg, textAdditional} from "../../common.styled/colors.styled";
import {device} from "../../common.styled/media.styled";

export const TopContactsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${lightGreyBg};
  padding: 7px 60px 6px 60px;
  height: 38px;
  
  @media ${device.tablet} {
    padding: 7px 28px 6px 28px;
  }
  
  @media ${device.mobile} {
    padding: 5px 16px 4px 28px;
    height: 32px;
  }
`

export const SocialTopContactsContainer = styled.div`
  display: inline-flex;
`

export const SocialSmallLink = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  margin-right: 11px;
  width: 25px;
  height: 25px;
  
  @media ${device.mobile} {
    width: 23px;
    height: 23px;
    margin-right: 8px;
  }
`

export const SocialSmallImage = styled.img`
  height: 7px;
  width: auto;
  margin: auto;
  
  @media ${device.mobile} {
    height: 6.2px;
  }
  
`

export const ContactContainer = styled.div`
  display: inline-flex;
  float: right;
  
  @media ${device.mobile} {
    display: none;
  }
`

export const ContactSmallText = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-left: 45px;
  color: ${textAdditional};
`