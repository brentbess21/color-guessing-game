import React from 'react';
import './HomePage.scss';
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import Header from "../../components/header/Header";
import ColorCardsContainer from "../../components/colorCardsContainer/ColorCardsContainer";

interface HomePageStateProps {
    currentUser: Model.User.User
}

interface HomePageDispatchProps {

}

type HomePageProps = HomePageStateProps & HomePageDispatchProps;

const HomePage : React.FC<HomePageProps>= (props: HomePageProps) => {
    let navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate('/welcome');
    }

    return (
        <div className={'homePage'}>
            <Header />
            <div className={'homePageContent'}>
                <h1>Welcome to your Home Page {props.currentUser.firstName}!</h1>
                <button>Start A New Game</button>

                <ColorCardsContainer numberOfCards={8} />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return({
        currentUser: state.user.currentUser
    })
}

export default connect(mapStateToProps)( HomePage);