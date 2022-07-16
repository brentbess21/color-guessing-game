import React from 'react';
import './Menu.scss';

interface MenuProps {
    close: ()=> void;
}

const Menu = (props : MenuProps) => {
    return (
        <div className={'menu'}>
            <div className={'headerContainer'}>
                <h1>Menu</h1>
                <i onClick={props.close} className="fa-solid fa-circle-xmark"></i>
            </div>
        </div>
    )
}

export default Menu;