import React from 'react';
import './GamePage.scss';
import ColorCardsContainer from "../../components/colorCardsContainer/ColorCardsContainer";
import Header from "../../components/header/Header";
import {connect} from "react-redux";
import GameTimer from "../../components/gameTimer/gameTimer";

interface GamePageStateProps {
    currentGame : Model.Game.Game
}

interface GamePageDispatchProps {

}

type GamePageProps = GamePageStateProps & GamePageDispatchProps

const GamePage : React.FC<GamePageProps> = (props: GamePageProps) => {
    const gameOverColor = 'rgb(95, 95, 95)'

    function renderColor() {
        if(props.currentGame.gameOver) {
            return {
                backgroundColor: gameOverColor
            }
        }
        if(props.currentGame.hasWon) {
            return {
                backgroundColor: props.currentGame.winningColor
            }
        }
    }

    function renderGame() {
        return (
            <>
                <div className={'headerContainer'} style={renderColor()}>
                    <h1>Guess the Correct Color</h1>
                    <h3 className={'rgbColor'}>{props.currentGame.winningColor}</h3>
                </div>
                <div className={'divider'}>
                    <p>Score: {props.currentGame.score}</p>
                    <GameTimer />
                </div>
                <div className={'cardsContainer'}>
                    <ColorCardsContainer />
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className={'gamePage'}>
                {renderGame()}
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return ({
        currentGame: state.game.currentGame
    })
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);