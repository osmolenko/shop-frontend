import styled from 'styled-components'
import {headerBlackLink} from "../../common.styled/links.styled";
import {device} from "../../common.styled/media.styled";
import {catsLink} from "../../common.styled/colors.styled";

export const FooterTopContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 80px;
  padding: 40px;
  background: ${catsLink};
  
  @media ${device.tablet} {
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 22px 28px 32px 28px;
  }
  
  @media ${device.mobile} {

  }
`

export const FooterTopLogo = styled.a`

  @media ${device.tablet} {
    order: 0;
  }
`

export const FooterTopLinkContainer = styled.div`
  display: flex;
  
  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
    height: 70px;
    margin-top: 10px;
    order: 2;
  }

  @media ${device.mobile} {
    order: 1;
    width: 300px;
  }
`

export const FooterTopLink = styled(headerBlackLink)`
  color: #FFF;
  margin-left: 55px;
  
  @media ${device.tablet} {
    margin-left: 42px;
    margin-bottom: 10px;
  }
  
  @media ${device.mobile} {
    
  }
  
`

export const FooterTopNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media ${device.tablet} {
    order: 1;
    margin-top: 15px;
    flex-direction: row;
  }

  @media ${device.mobile} {
    order: 2;
    flex-direction: column;
  }
`

export const FooterTopNumber = styled(FooterTopLink)`
`

export const FooterTopSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${device.tablet} {
    order: 3;
    margin-top: 10px;
  }

  @media ${device.mobile} {

  }
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
      height: 6.2px;
    }

    @media ${device.mobile} {

    }

  }
`
