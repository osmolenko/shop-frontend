import React, { useState } from 'react';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem,
    SelectArrow
} from "./Select.styled";
import arrow from '../../images/arrow-down.svg'

export default function Select(props) {

        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState(null);

        const toggling = () => setIsOpen(!isOpen);

        const onOptionClicked = value => () => {
            setSelectedOption(value);
            setIsOpen(false);
        };

        return(
            <DropDownContainer width={props.width}>
                <DropDownHeader onClick={toggling}>
                    {selectedOption || props.option[0]}
                    <SelectArrow src={arrow} alt=' '/>
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer width={props.width} onMouseLeave={toggling}>
                        <DropDownList>
                            {props.option.map((option, idx) => (
                                <ListItem onClick={onOptionClicked(option)} key={idx}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        )
}