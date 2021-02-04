import styled from 'styled-components'
import {blackHeading} from "../../../common.styled/colors.styled";
import {device} from "../../../common.styled/media.styled";

export const SliderBackground = styled.div`
  background-image: url(${(props)=> props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 610px;
  padding: 125px 0 155px 150px;
  
  @media ${device.desktop} {
    padding: 125px 0 155px 60px;
  }
  
  @media ${device.mobile} {
    padding: 125px 16px 155px 16px;
  }
`

export const SliderText = styled.h1`
  color: ${blackHeading};
  width: 400px;

  @media ${device.mobile} {
    width: 300px;
  }
`