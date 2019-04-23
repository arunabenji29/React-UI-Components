import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className = 'header-title'>
            <div className = 'top'>
                <h1>Lambda School</h1>
                <div>@lambdaschool</div>
                <div>. 26 jan</div>
            </div>
            <HeaderContent />
        </div>
    );
}
export default HeaderTitle