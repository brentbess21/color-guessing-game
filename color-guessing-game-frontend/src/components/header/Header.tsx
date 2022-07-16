import React, {useState} from 'react';
import './Header.scss';
import SlideOutMenu from "../slideOutMenu/SlideOutMenu";
import Menu from "../menu/Menu";
import Settings from "../settings/Settings";

interface HeaderProps {
    clickMenuIcon: ()=> void;
    clickSettingsIcon: ()=> void;
}

const Header = () => {
    const[isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleSettingsClick() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    function renderSlideOutMenu () {
        if(isMenuOpen){
            return (
                <SlideOutMenu isOpen={isMenuOpen} slideDirection={'leftToRight'}>
                    <Menu close={()=>setIsMenuOpen(false)} />
                </SlideOutMenu>
            )
        }
        if(isSettingsOpen) {
            return (
                <SlideOutMenu isOpen={isSettingsOpen} slideDirection={'rightToLeft'} >
                    <Settings close={()=>setIsSettingsOpen(false)} />
                </SlideOutMenu>
            )
        }
    }

    return (
        <div className={'header'}>
            <i className="fa-solid fa-bars" onClick={handleMenuClick}></i>
            <h3>Guess it</h3>
            {renderSlideOutMenu()}
            <i className="fa-solid fa-gear" onClick={handleSettingsClick}></i>
        </div>
    )
}

export default Header;
