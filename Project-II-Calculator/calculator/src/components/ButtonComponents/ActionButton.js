import React from 'react';
import './Button.css';
import WideButton from './WideButton';
import NumberButton from './NumberButton';

const actionContent =  [{text:'/',buttonStyle:'red'},{text:'X',buttonStyle:'red'},{text:'-',buttonStyle:'red'},
{text:'+',buttonStyle:'red'},
{text:'=',buttonStyle:'red'}]

const ActionButton = () => {
    return (
        <div className='button-area'>
            <div className='numbers'>
                <NumberButton />
            </div>
            <div className = 'action-button'>
                {actionContent.map(action => {
                
                    return <WideButton wideProp = {action} />;
                })}
            </div>
            
        </div>
    );
}

export default ActionButton;