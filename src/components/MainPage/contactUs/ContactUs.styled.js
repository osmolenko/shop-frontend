import styled from 'styled-components'
import {blackText, green} from "../../../common.styled/colors.styled";
import {device} from "../../../common.styled/media.styled";
import contactUs from '../../../images/contactUs.png';

export const ContactUsContainer = styled.div`
  height: 1094px;
  background-image: url(${contactUs});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000px;
  
  @media ${device.tablet} {
    padding: 30px 60px 85px 60px;
    background-size: 900px;
  }
  
  @media ${device.mobile} {
    padding: 0;
  }
`

export const ContactUsHeader = styled.h2`
  text-align: center;
  color: ${blackText};
  padding: 60px 0 0 0;
  margin: 50px 0 173px 0;
  
  @media ${device.tablet} {

  }
`

export const ContactUsForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
`

export const ContactUsLabel = styled.label`
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  align-self: flex-start;

`

export const ContactUsInput = styled.input`
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  
  outline: 0;
  border: none;
  color: #000000;
  background: #FFFFFF;
  border-radius: 28px;
  margin: 10px 0 25px 0;
  width: 300px;
  padding: 10px 20px;
`

export const ContactUsTextArea = styled.textarea`
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  
  resize: none;
  
  outline: 0;
  border: none;
  color: #000000;
  background: #FFFFFF;
  border-radius: 28px;
  margin: 10px 0 25px 0;
  width: 300px;
  padding: 10px 20px;
`

