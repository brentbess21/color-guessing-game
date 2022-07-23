import {CardGenerator} from "../../utils/CardGenerator";

export const START_GAME = 'START_GAME';
export const SET_WINNER = 'SET_WINNER';

export const startGame = () => {
    const cardGenerator = new CardGenerator(6);
    const cardsArray = cardGenerator.generateColorCardsArray();
    const winnerIndex =  Math.floor(Math.random() * cardsArray.length);
    const winningColor = cardsArray[winnerIndex].randomColor;

    const newGame : Model.Game.Game = {
        score: 0,
        //todo: figure out how to handle a timer
        timer: 0,
        cardsArray: cardsArray,
        winningIndex: winnerIndex,
        winningColor: winningColor,
        hasWon: false
    }
    return ({type: START_GAME, payload: newGame})
}

export const setWinner = () => {
    return ({type: SET_WINNER})
}