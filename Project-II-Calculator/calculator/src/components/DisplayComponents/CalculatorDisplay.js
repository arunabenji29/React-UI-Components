import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className = "display">{props.propsDisplay}</div>
    );
}

export default CalculatorDisplay