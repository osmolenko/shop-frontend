import React from 'react'
import {FooterTop} from "./FooterTop";
import FooterBottom from "./FooterBottom";

export class Footer extends React.Component{
    render() {
        return(
            <div>
                <FooterTop/>
                <FooterBottom/>
            </div>
        )
    }
}