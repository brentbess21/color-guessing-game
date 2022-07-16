import React from 'react';
import './Settings.scss';
import {useNavigate} from "react-router";

interface SettingsProps {
    close: ()=> void;
}

const Settings = (props : SettingsProps) => {
    let navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate('/welcome');
    }

    return (
        <div className={'settings'}>
            <div className={'headerContainer'}>
                <h1>Settings</h1>
                <i onClick={props.close} className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className={'settingsOptions'}>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Settings;