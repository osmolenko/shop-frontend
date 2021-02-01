import React from 'react';
import {ButtonBlack, ButtonGreen, ButtonWhite} from "./ShopButton.styled";
import cart from "../images/cartW.svg";

export default function ShopButton(props) {
    return(
        <div>
            {props.green ? <ButtonGreen margin={props.margin}
                                        width={props.width}
                                        href={props.href}>
                {props.text} {props.image ? <img src={props.image}/> : ''}
            </ButtonGreen> : ''}
            {props.white ? <ButtonWhite margin={props.margin}
                                        width={props.width}
                                        href={props.href}>
                {props.text} {props.image ? <img src={props.image}/> : ''}
            </ButtonWhite> : ''}
            {props.black ? <ButtonBlack margin={props.margin}
                                        width={props.width}
                                        href={props.href}>
                {props.text} {props.image ? <img src={props.image}/> : ''}
            </ButtonBlack> : ''}
        </div>
    )
}