import {CardGenerator} from "../../utils/CardGenerator";

export const START_GAME = 'START_GAME';
export const SET_WINNER = 'SET_WINNER';
export const SET_GAME_OVER = 'SET_GAME_OVER';

export const startGame = () => {
    const cardGenerator = new CardGenerator(6);
    const cardsArray = cardGenerator.generateColorCardsArray();
    const winnerIndex =  Math.floor(Math.random() * cardsArray.length);
    const winningColor = cardsArray[winnerIndex].randomColor;

    const newGame : Model.Game.Game = {
        score: 0,
        timer: 10,
        cardsArray: cardsArray,
        winningIndex: winnerIndex,
        winningColor: winningColor,
        hasWon: false,
        gameOver: false,
        numberOfGuesses: 0
    }
    return ({type: START_GAME, payload: newGame})
}

export const setWinner = () => {
    return ({type: SET_WINNER})
}

export const setGameOver = () => {
    return ({type: SET_GAME_OVER})
}