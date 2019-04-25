import React from 'react';

const EachNumber = props => {
    return (
        <div className='number-card'>
            <button
                className={props.numberProp.buttonStyle}
                onClick={props.noPropFn} >
                {props.numberProp.text}
            </button>
        </div>
    )
}

export default EachNumber;