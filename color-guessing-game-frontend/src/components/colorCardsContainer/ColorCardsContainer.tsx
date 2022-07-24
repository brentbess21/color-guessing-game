import React from 'react';
import './ColorCardsContainer.scss';
import ColorCard from '../colorCard/ColorCard';
import {connect} from "react-redux";
import {startGame} from "../../state/actions/gameActions";
import {useNavigate} from "react-router";

interface ColorCardsContainerStateProps {
    currentGame: Model.Game.Game;
}

interface ColorCardsContainerDispatchProps {
    startGame: (initialScore: number)=> {};
}

type ColorCardsContainerProps = ColorCardsContainerStateProps & ColorCardsContainerDispatchProps;

const ColorCardsContainer = (props: ColorCardsContainerProps) => {
    let navigate = useNavigate();
    const gameOverColor = 'rgb(95, 95, 95)';

    function handlePlayAgain() {
        navigate('/home');
    }

    function handleNextRound() {
        props.startGame(props.currentGame.score);
    }

    function renderColorCards () {
        if(props.currentGame.cardsArray.length <= 0) return;
        return props.currentGame.cardsArray.map(card => {
            return <ColorCard key={card.id} id={card.id} randomColor={card.randomColor} />
        })
    }

    function renderMessage() {
        return (
            <div className={'winningMessage'}>
                {props.currentGame.gameOver ? <h3>Game Over</h3> : <h3>Correct!</h3>}
                {props.currentGame.gameOver ? <button onClick={handlePlayAgain}>Play Again</button> : <button onClick={handleNextRound}>Next Round</button> }
            </div>
        )
    }

    function renderBackgroundColor() : object | void {
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

    return (
        <div className={'colorCardsContainer'} style={renderBackgroundColor()} >
            {props.currentGame.hasWon || props.currentGame.gameOver ? renderMessage() : renderColorCards()}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return({
        currentGame: state.game.currentGame
    })
}

const mapDispatchToProps = {startGame}

export default connect(mapStateToProps, mapDispatchToProps)(ColorCardsContainer);