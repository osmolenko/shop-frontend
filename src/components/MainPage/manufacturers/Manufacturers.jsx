import React from 'react'
import {ManContainer, ManHeader, ManListContainer, ManListItem} from "./manufacturers.styled";

export default class Manufacturers extends React.Component{
    render(){
        console.log(this.props.data)
        return(
            <ManContainer>
                <ManHeader>Производители</ManHeader>
                <ManListContainer>
                    {this.props.data.map(value => {
                        return(
                            <ManListItem>{value}</ManListItem>
                        )
                    })}
                </ManListContainer>
            </ManContainer>
        )
    }
}