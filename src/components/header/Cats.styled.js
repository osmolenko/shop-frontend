import styled from 'styled-components';
import {border, catsActiveBg, catsLinkGrey, greenCart} from "../../common.styled/colors.styled";

export const CatsContainer = styled.div`
  border-top: 1px solid ${border};
  background-color: white;
  padding-top: 28px;
  
  z-index: 99999;
  position: absolute;
  height: 370px;
  width: 100%;
  
  display: grid;
  grid-template-columns: 370px auto;
  grid-template-areas: 'links cats';
`

export const MainCatsContainer = styled.div`
  grid-area: links;
  
  display: flex;
  flex-flow: column wrap;

  border-right: 1px solid ${border};
`

export const MainCatLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: baseline;

  background-color: ${(props)=> props.active ? catsActiveBg : ''};
  
  transition: all 0.2s ease;

  padding: 4px 53px 10px 60px;
  
  &:hover {
    background-color: ${catsActiveBg};
  }
`

export const MainCatLinkText = styled.h5`
  margin-block: 0 !important;

`

export const MainCatLinkIcon = styled.img`
    padding-top: 7px;
`

export const CatLinksContainer = styled.div`
  grid-area: cats;
  
  margin-left: 38px;
  
  display: flex;
  flex-flow: row nowrap;
`

export const CatLinksRow = styled.div`
  display: flex;
  flex-flow: column wrap;

  &:last-child {
    padding-right: 20px;
  }
`

export const CatLinksHeadLink = styled.a`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 150%;
  
  color: ${greenCart};
  
  border-bottom: 1px solid ${border};
  padding-bottom: 13px;
  padding-left: 50px;
  margin-bottom: 20px;
  
  &:last-child {
    padding-right: 20px;
  }
`

export const CatLinksLink = styled.a`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  
  color: ${catsLinkGrey};
  
  margin-bottom: 8px;
  padding-left: 50px;

  &:last-child {
    padding-right: 20px;
  }

`