import React from 'react'
import { CountInput, PlusMinusButton} from "./Count.styled";


export default class Count extends React.Component{

    constructor() {
        super();
        this.state = {
            count: 1,
        };
    }

    handleCountChange = (event) => {
        this.setState({ count: event.target.value });
    };

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount = () => {
        if(this.state.count !== 1){
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    render() {

        return(
            <div>
                <PlusMinusButton onClick={this.decrementCount}>-</PlusMinusButton>
                <CountInput
                    value={this.state.count}
                    onChange={this.handleCountChange}
                />
                <PlusMinusButton onClick={this.incrementCount}>+</PlusMinusButton>
            </div>
        )
    }
}