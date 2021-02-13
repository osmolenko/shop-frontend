import styled from 'styled-components';
import {green} from "../common.styled/colors.styled";
import {device} from "../common.styled/media.styled";

const Radio = styled.div`
  height: 33px;
  width: 33px;
  border: 2px solid ${green};
  border-radius: 50%;
  box-sizing: border-box;
  
  transition: all 0.5s ease;
  
  @media ${device.mobile} {
    margin-top: 14px;
  }
`

export const RadioButtonInactive = styled(Radio)`


`

export const RadioButtonActive = styled(Radio)`
  border: 10px solid ${green};

`