import styled from 'styled-components'
import {device} from "../../../common.styled/media.styled";

export const SliderContainer = styled.div`
  margin-bottom: 20px;
  
  & > div {
    height: 610px !important;
  }
  
  & > div > div {
    height: 610px !important;
  }
  
  @media ${device.tablet} {
    & > div {
      height: 325px !important;
    }

    & > div > div {
      height: 325px !important;
    }
  }

  @media ${device.mobile} {
    & > div {
      height: 180px !important;
    }

    & > div > div {
      height: 180px !important;
    }
  }
`