import React from 'react';
import './LandingPage.scss';
import {useNavigate} from "react-router";


const LandingPage = () => {

    let navigate = useNavigate();

    return (
        <div className={'landingPage'}>
            <div className={'titleContainer'}>
                <h3 className={''}>Welcome to</h3>
                <h1>Guess it</h1>
                <h3 className={'subtitle'}>A color guessing game</h3>
            </div>
            <div className={'buttonsContainer'}>
                <button className={'buttonPrimary'} onClick={()=>{navigate('/signup')}}>Sign Up</button>
                <button className={'buttonPrimary'} onClick={()=>{navigate('/login')}}>Log In</button>
            </div>
        </div>
    )
}

export default LandingPage;