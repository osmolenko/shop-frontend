import styled from 'styled-components'
import {ManFont} from "../../../common.styled/text.styled";
import {blackHeading, blackText} from "../../../common.styled/colors.styled";
import {device} from "../../../common.styled/media.styled";

export const ManContainer = styled.div`
  margin-top: 100px;
  padding: 72px 73px 71px 60px;
  background: #F2F2F2;
  
  @media ${device.tablet} {
    padding: 66px 28px 75px 28px;
  }
`

export const ManHeader = styled.h1`
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: ${blackHeading};
`

export const ManListContainer = styled.div`
  height: 200px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  margin: 50px 0 0 0;
  
  @media ${device.tablet} {
    overflow: scroll;
  }
`

export const ManListItem = styled(ManFont)`
  color: ${blackText};
  flex-basis: 20%;
  margin-bottom: 10px;
  
  @media ${device.tablet} {
    margin-left: 55px;
  }
`