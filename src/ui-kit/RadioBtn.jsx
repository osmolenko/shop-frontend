import {RadioButtonActive, RadioButtonInactive} from "./RadioBtn.styled";

export default function RadioBtn(props) {
    return(
        <div>
            {props.active ? <RadioButtonActive/> : <RadioButtonInactive/>}
        </div>
    )
}