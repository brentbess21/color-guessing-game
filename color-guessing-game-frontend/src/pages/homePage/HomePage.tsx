import React from 'react';
import './HomePage.scss';
import {connect} from "react-redux";

const HomePage = (props: any) => {

    function handleClick() {
        console.log(props.user)
    }
    return (
        <div className={'homePage'}>
            <h1>Welcome to your Home Page!</h1>
            <button onClick={handleClick}>Click Me For Info</button>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return({
        user: state.user
    })
}

export default connect(mapStateToProps)( HomePage);