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
            <DropDownContainer>
                <DropDownHeader onClick={toggling}>
                    {selectedOption || props.option[0]}
                    <SelectArrow src={arrow} alt=' '/>
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {props.option.map(option => (
                                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        )
}