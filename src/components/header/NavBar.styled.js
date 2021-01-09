import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 0 40px;
`

export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;

`

export const Link = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  text-decoration: none;
  margin-left: 55px;
`

export const SearchContainer = styled.div`
  height: 48px;
  border: 1px solid #DFDFE0;
  box-sizing: border-box;
  border-radius: 28px;
  padding: 12px 17px 12px 24px;
  margin-left: 43px;
`

export const SearchInput = styled.input`
  border: none;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  outline: 0;
`

export const SearchButton = styled.button`
  border: none;
  background: none;
  border-left: 1px solid #DFDFE0;;
  padding-left: 16px;
`

const NavBarButton = styled.button`
  height: 48px;
  width: 48px;
  margin-left: 24px;
`

export const WishButton = styled(NavBarButton)`
  background: #F4F4F4;
  border: none;
  border-radius: 50%;
`

export const CartButton = styled(NavBarButton)`
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 50%;
`