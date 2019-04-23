import React from 'react';

const EachNumber = props => {
    return (
        <div className='number-card'>
            <div>{props.numberProp}</div>
            {/* <button className={props.buttonStyle}>{props.numberProp}</button> */}
        </div>
    )
}

export default EachNumber;