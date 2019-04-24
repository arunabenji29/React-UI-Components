import React from 'react';

const EachNumber = props => {
    return (
        <div className='number-card'>
            
            <button className={props.numberProp.buttonStyle}>{props.numberProp.text}</button>
        </div>
    )
}

export default EachNumber;