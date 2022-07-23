import React from 'react';
import './ColorCardsContainer.scss';
import ColorCard from '../colorCard/ColorCard';
import {connect} from "react-redux";
import {startGame} from "../../state/actions/gameActions";

interface ColorCardsContainerStateProps {
    currentGame: Model.Game.Game;
}

interface ColorCardsContainerDispatchProps {
    startGame: ()=> {};
}

type ColorCardsContainerProps = ColorCardsContainerStateProps & ColorCardsContainerDispatchProps;

const ColorCardsContainer = (props: ColorCardsContainerProps) => {

    function handlePlayAgain() {
        props.startGame();
    }

    function renderColorCards () {
        if(props.currentGame.cardsArray.length <= 0) return;
        return props.currentGame.cardsArray.map(card => {
            return <ColorCard key={card.id} id={card.id} randomColor={card.randomColor} />
        })
    }

    function renderWinnerMessage() {
        return (
            <div className={'winningMessage'}>
                <h3>You win!</h3>
                <button onClick={handlePlayAgain}>Play Again?</button>
            </div>
        )
    }

    function renderBackgroundColor() : object | void {
        if(props.currentGame.hasWon) {
            return {
                backgroundColor: props.currentGame.winningColor
            }
        }
    }


    return (
        <div className={'colorCardsContainer'} style={renderBackgroundColor()} >
            { props.currentGame.hasWon? renderWinnerMessage() : renderColorCards()}
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