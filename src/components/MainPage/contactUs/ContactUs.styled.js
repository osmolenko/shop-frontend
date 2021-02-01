import styled from 'styled-components'
import {blackText, green} from "../../../common.styled/colors.styled";
import {device} from "../../../common.styled/media.styled";
import contactUs from '../../../images/contactUs.png';

export const ContactUsContainer = styled.div`
  padding: 30px 460px 85px 460px;
  margin: 80px 0;
  background-image: url(${contactUs});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 750px;
  
  @media ${device.tablet} {
    padding: 30px 60px 85px 60px;
    background-position: center;
    background-size: 750px;
  }
  
  @media ${device.mobile} {
    background-position: left -150px top 50px;
  }
`

export const ContactUsHeader = styled.h2`
  text-align: center;
  color: ${blackText};
  margin-bottom: 100px;
`

export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-left: 90px;
  
  @media ${device.tablet} {
    margin-left: 160px;
  }

  @media ${device.mobile} {
    margin-left: 0;
  }
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

  outline: 0;
  border: none;
  color: #000000;
  background: #FFFFFF;
  border-radius: 28px;
  margin: 10px 0 25px 0;
  width: 300px;
  padding: 10px 20px;
`

export const ContactUsSubmitButton = styled.button`
  border: 0;
  outline: 0;
  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  
  color: #FFF;
  background: ${green};
  border-radius: 70px;
  padding: 17px 66px 18px 68px;

  align-self: flex-start;
  margin-left: 90px;

  @media ${device.tablet} {
    margin-left: 160px;
  }

  @media ${device.mobile} {
    margin-left: 0;
  }
`

