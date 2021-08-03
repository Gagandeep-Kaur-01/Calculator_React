import React, { Component } from 'react'
import Button from './Button'
import Keypad from './Keypad'
import Display from './Display'

class Calculator extends Component {
    render() {
        return (
            <div className="Calculator">
                <Display data={this.state.data} />
                <Keypad>
                    <Button label="C" value="clear" />
                </Keypad>
                
            </div>
        )
    }
}

export default Calculator
