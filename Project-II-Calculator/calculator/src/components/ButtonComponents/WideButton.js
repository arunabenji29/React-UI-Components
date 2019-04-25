import React from 'react';

const WideButton = (props) => {
    return (
        <div className='wider'>
            <button className={props.wideProp.buttonStyle} 
            onClick={props.widePropFn}
            >
            {props.wideProp.text}
            </button>
        </div>
    )
}
export default WideButton;