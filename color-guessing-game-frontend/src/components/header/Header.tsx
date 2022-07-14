import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className={'header'}>
            <i className="fa-solid fa-bars"></i>
            <h3>Guess it</h3>
            <i className="fa-solid fa-gear"></i>
        </div>
    )
}

export default Header;
