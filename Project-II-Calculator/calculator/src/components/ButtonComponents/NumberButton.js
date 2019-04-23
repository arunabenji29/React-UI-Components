import React from 'react';
import './Button.css';
import EachButton from './EachButton'
import WideButton from './WideButton'
import ActionButton from './ActionButton';
// const numbers = ['/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+']
const numbers = [ 7, 8, 9, 4, 5, 6, 1, 2, 3]
const wideContent = ["CLEAR", 0]

// const NumberButton = () => {
//     return (

//         <div className='button-area'>

//             <div className='numbers'>
//             <WideButton wideProp={wideContent[0]} />
//                 {numbers.map(number => {
//                     return <EachButton numberProp={number} />
//                 })}
//             </div>

//         </div>
//     );
// }
const NumberButton = () => {
    return (
        <div className='button-area'>
            <div className='numbers'>
                <WideButton wideProp={wideContent[0]} />
                {numbers.map(number => {
                    return <EachButton numberProp={number} />
                })}
                <WideButton wideProp={wideContent[1]} />

            </div>
            <div className='operators'>
                <ActionButton />
            </div>
        </div>
    );
}
export default NumberButton;
