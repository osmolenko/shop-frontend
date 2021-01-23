import styled from 'styled-components'
import {device} from "../../../common.styled/media.styled";
import {NewsTxt} from "../../../common.styled/text.styled";
import {NewsInput} from "../../../common.styled/inputs.styled";

export const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  background-image: url(https://shop.osmolenko.cloud/news/news-lg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 80px;
  height: 329px;
  
  @media ${device.tablet} {
    background-image: url(https://shop.osmolenko.cloud/news/news-md.png);
    height: 411px;
  }

  @media ${device.mobile} {
    background-image: url(https://shop.osmolenko.cloud/news/news-sm.png);
    height: 690px;
  }
`

export const NewsHeader = styled.h3`
  color: #FFF;
  margin: 83px 0 0 0;
  
  
  @media ${device.tablet} {
    margin: 126px 0 0 0;
  }
  
  @media ${device.mobile} {
      margin: 220px 0 0 0;
      width: 72vw;
  }
`

export const NewsText = styled(NewsTxt)`
  color: #FFF;
  margin: 20px 0 28px 0;
  
  @media ${device.mobile} {
    width: 72vw;
  }
`

export const SendContainer = styled.div`
  display: flex;
  justify-items: center;
  background: #FFF;
  padding: 11px 24px 13px 24px;
  border-radius: 28px;

  @media ${device.mobile} {
    padding: 12px 19px 10px 21px;
  }
`

export const SendInput = styled(NewsInput)`
  outline: 0;
  border: none;
  width: 400px;
  margin-bottom: 2px;

  @media ${device.mobile} {
    width: 200px;
  }
`

export const SendButton = styled.button`
  background: none;
  border: none;
    & > img {
      height: 25.204418182373047px;
      width: 25.19719696044922px;
    }
`
