import styled from 'styled-components'
import {headerBlackLink} from "../../common.styled/links.styled";
import {device} from "../../common.styled/media.styled";
import {catsLink} from "../../common.styled/colors.styled";

export const FooterTopContainer = styled.div`
  display: grid;
  grid-template-areas: "logo links numbers social";
  margin-top: 80px;
  padding: 40px;
  background: ${catsLink};
  
  @media ${device.tablet} {
    grid-template-areas: "logo numbers" ". ." "links social";
    grid-template-rows: 50px 20px 90px;
    padding: 22px 28px 32px 28px;
  }
  
  @media ${device.mobile} {
    grid-template-areas: "logo logo" "links links" "numbers social";
    grid-template-rows: auto;
  }
`

export const FooterTopLogo = styled.a`
  grid-area: logo;
`

export const FooterTopLinkContainer = styled.div`
  grid-area: links;
  display: flex;
  margin-top: 10px;

  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
    height: 70px;
    margin-left: -42px;
  }

  @media ${device.mobile} {
    margin-left: 0;
    width: 300px;
  }
`

export const FooterTopLink = styled(headerBlackLink)`
  color: #FFF;
  margin-left: 55px;
  
  @media ${device.tablet} {
    margin: 0 0 10px 42px;
  }
  
  @media ${device.mobile} {
    margin: 0 42px 10px 0;

  }
  
`

export const FooterTopNumberContainer = styled.div`
  grid-area: numbers;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  
  @media ${device.tablet} {
    justify-self: end;
    margin-top: 15px;
    flex-direction: row;
  }

  @media ${device.mobile} {
    justify-self: start;
    flex-direction: column;
  }
`

export const FooterTopNumber = styled(FooterTopLink)`
`

export const FooterTopSocialContainer = styled.div`
  grid-area: social;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
`

export const FooterTopSocialButtonContainer = styled.div`
  margin: 13px 0 20px 20px;
`

export const FooterTopSocialText = styled(FooterTopLink)`
  margin: 0;

  @media ${device.mobile} {
    display: none;
  }
`

export const FooterTopSocialButton = styled.a`
  display: inline-flex;
  justify-content: center;
  height: 44px;
  width: 44px;
  background: #F4F4F4;
  border-radius: 50%;
  margin-left: 11px;
  
  & > img {
    height: 7px;
    width: auto;
    margin: auto;

    @media ${device.mobile} {
      flex-direction: row;
    }
  }
`
