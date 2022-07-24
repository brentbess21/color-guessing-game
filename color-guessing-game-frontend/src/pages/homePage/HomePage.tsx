import React from 'react';
import './HomePage.scss';
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import Header from "../../components/header/Header";
import {startGame} from "../../state/actions/gameActions";

interface HomePageStateProps {
    currentUser: Model.User.User;
    currentGame: Model.Game.Game;
}

interface HomePageDispatchProps {
    startGame: (initialScore: number)=> {};
}

type HomePageProps = HomePageStateProps & HomePageDispatchProps;

const HomePage : React.FC<HomePageProps>= (props: HomePageProps) => {
    let navigate = useNavigate();

    function handleStartNewGame() {
        props.startGame(0);
        navigate('/game');
    }

    return (
        <div className={'homePage'}>
            <Header />
            <div className={'homePageContent'}>
                <h1>Welcome to your Home Page {props.currentUser.firstName}!</h1>
                <button onClick={handleStartNewGame}>Start A New Game</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return({
        currentUser: state.user.currentUser,
        currentGame: state.game.currentGame
    })
}

const mapDispatchToProps = {startGame}

export default connect(mapStateToProps, mapDispatchToProps)( HomePage);