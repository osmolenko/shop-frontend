import React from 'react'
import {ManContainer, ManHeader, ManListContainer, ManListItem} from "./manufacturers.styled";

export default class Manufacturers extends React.Component{
    render(){
        return(
            <ManContainer>
                <ManHeader>Производители</ManHeader>
                <ManListContainer>
                    {this.props.data.map((value, idx) => {
                        return(
                            <ManListItem key={idx}>{value}</ManListItem>
                        )
                    })}
                </ManListContainer>
            </ManContainer>
        )
    }
}