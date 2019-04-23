import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className = 'header-title'>
            <div className = 'top'>
                <h1>Lambda School</h1>
                <div>@lambdaschool</div>
                <div>{moment().format('D MMMM ')}</div>
            </div>
            <HeaderContent />
        </div>
    );
}
export default HeaderTitle