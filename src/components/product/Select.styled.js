import styled from 'styled-components';
import {blackText} from "../../common.styled/colors.styled";
import {device} from "../../common.styled/media.styled";

export const DropDownContainer = styled("div")`
  width: ${(props)=> props.width};

  cursor: pointer;

  @media ${device.tablet} {
    width: 35rem;
  }

  @media ${device.mobile} {
    width: 20rem;
  }
`;

export const SelectArrow = styled.img`
  float: right;
`

export const DropDownHeader = styled("div")`
  border: 1px solid #DFDFE0;
  border-radius: 32px;
  margin-bottom: 0.8em;
  padding: 16px 23px 16px 24px;
  
  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${blackText};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media ${device.tablet}{
  }
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: ${(props)=> props.width};

  @media ${device.tablet} {
    width: 35rem;
  }

  @media ${device.mobile} {
    width: 20rem;
  }
`;

export const DropDownList = styled("ul")`
  border: 1px solid #DFDFE0;
  border-radius: 17px;
  text-align: center;
  color: ${blackText};


  padding: 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ListItem = styled("li")`
  list-style: none;
  padding: 16px 0 15px 0;

  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${blackText};
  
  
  &:hover {
    color: ${blackText};
    background: rgba(190, 240, 120, 0.3);
  }
`;
