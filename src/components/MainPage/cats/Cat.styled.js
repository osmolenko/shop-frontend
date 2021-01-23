import styled from 'styled-components'
import {catLink} from "../../../common.styled/links.styled";
import {device} from "../../../common.styled/media.styled";

export const CardContainer = styled.div`
  background: url('${(props)=> props.image}') no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 36px 28px 35px;
  height: 289px;
  width: 300px;
  
  @media ${device.tablet} {
    margin-right: 18px;
  }
  
  @media ${device.mobile} {
    margin-right: 15px;
  }
`

export const CardText = styled.h4`
  color: #FFFFFF;
`

export const CardButton = styled(catLink)`
  display: flex;
  justify-content: center;
  height: 55px;
  width: 238px;
  background: #FFFFFF;
  border-radius: 70px;
  margin-bottom: 28px;
  text-align: center;
  text-justify: distribute;
`

export const CardButtonText = styled.span`
  font-size: 15px;
  line-height: 24px;
  margin: auto;
`