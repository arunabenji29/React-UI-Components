import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';

const operators = ['/','X','-','+','=']
const ActionButton = () => {
    return (
        <div className = 'action-button'>
            {operators.map(operator => {
                return <OperatorButton operatorProp = {operator} />;
            })}
        </div>
    );
}
export default ActionButton;