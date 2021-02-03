import styled from "styled-components";
import {greyBg} from "../../common.styled/colors.styled";
import {searchInput} from "../../common.styled/inputs.styled";

export const PlusMinusButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  background ${greyBg};
  cursor: pointer;
`

export const CountInput = styled(searchInput)`
  outline: 0;
  border: 0;
  max-width: 25px;
  text-align: center;
  text-justify: distribute;
`
