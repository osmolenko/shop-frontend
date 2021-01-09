import styled from 'styled-components'

export const FooterTopContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 80px;
  padding: 40px;
  background: #848484;
`

export const FooterTopLogo = styled.a`
  font-size: 28px;
  line-height: 24px;
  color: #FFFFFF;
`

export const FooterTopLinkContainer = styled.div`
  display: flex;
`

export const FooterTopLink = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-left: 55px;
`

export const FooterTopNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterTopNumber = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`

export const FooterTopSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

export const FooterTopSocialButtonContainer = styled.div`
  margin: 20px 20px 20px 0;
`

export const FooterTopSocialText = styled(FooterTopLink)`
  margin: 0;
`

export const FooterTopSocialButton = styled.a`
  display: inline-flex;
  justify-content: center;
  height: 44px;
  width: 44px;
  background: #F4F4F4;
  border-radius: 50%;
  margin-right: 20px;
`
