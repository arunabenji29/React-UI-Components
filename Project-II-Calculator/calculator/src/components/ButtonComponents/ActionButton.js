import React from 'react';
import './Button.css';
import WideButton from './WideButton';
import NumberButton from './NumberButton';

const actionContent =  [{text:'/',buttonStyle:'red'},{text:'*',buttonStyle:'red'},{text:'-',buttonStyle:'red'},
{text:'+',buttonStyle:'red'},
{text:'=',buttonStyle:'red'}]



const ActionButton = (props) => {
    return (
        <div className='button-area'>
            <div className='numbers'>
                <NumberButton numberPropFn = {props.handleClick}/>
            </div>
            <div className = 'action-button '
            
            >
                {actionContent.map(action => {
                
                    return <WideButton widePropFn = {props.handleClick} wideProp = {action} />;
                })}
            </div>
            
        </div>
    );
}

export default ActionButton;