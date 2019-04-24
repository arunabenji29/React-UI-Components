import React from 'react';
import './Button.css';
import EachButton from './EachButton'
// import ActionButton from './ActionButton'

const numbers = [{text:'Clear',buttonStyle:'wide'},
                 {text:'7',buttonStyle:'white'},
                 {text:'8',buttonStyle:'white'},
                 {text:'9',buttonStyle:'white'},
                 {text:'4',buttonStyle:'white'},
                 {text:'5',buttonStyle:'white'},
                 {text:'6',buttonStyle:'white'},
                 {text:'1',buttonStyle:'white'},
                 {text:'2',buttonStyle:'white'},
                 {text:'3',buttonStyle:'white'},
                 {text:'0',buttonStyle:'wide'},
                ]


const NumberButton = () => {
    return (

        <div className='numbers'>

                {numbers.map(number => {
                    return <EachButton numberProp={number} />
                })}
            

        </div>
    );
}


export default NumberButton;
