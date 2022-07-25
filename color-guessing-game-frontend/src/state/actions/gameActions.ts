import {CardGenerator} from "../../utils/CardGenerator";

export const START_GAME = 'START_GAME';
export const SET_WINNER = 'SET_WINNER';
export const UPDATE_GUESS_COUNT = 'UPDATE_GUESS_COUNT';
export const UPDATE_GAME_SCORE = 'UPDATE_GAME_SCORE';
export const SET_GAME_OVER = 'SET_GAME_OVER';

export const startGame = (initialScore: number) => {
    const cardGenerator = new CardGenerator(6);
    const cardsArray = cardGenerator.generateColorCardsArray();
    const winnerIndex =  Math.floor(Math.random() * cardsArray.length);
    const winningColor = cardsArray[winnerIndex].randomColor;

    const newGame : Model.Game.Game = {
        score: initialScore,
        timer: 30,
        cardsArray: cardsArray,
        winningIndex: winnerIndex,
        winningColor: winningColor,
        hasWon: false,
        gameOver: false,
        currentGuessCount: 0
    }
    return ({type: START_GAME, payload: newGame})
}

export const setWinner = () => {
    return ({type: SET_WINNER})
}

export const updateGuessCount = (updatedGuessCount : number) => {
    return({type: UPDATE_GUESS_COUNT, payload: updatedGuessCount})
}

export const updateGameScore = (numberOfGuesses: number) => {
   const calculateScore = () : number => {
       switch (numberOfGuesses) {
           case(1):
               return 6;
           case(2):
               return 5;
           case(3):
               return 4;
           case(4):
               return 3;
           case(5):
               return 2;
           case(6):
               return 1;
           default:
               return 0;
       }
   }
    return({type: UPDATE_GAME_SCORE, payload: calculateScore()})
}

export const setGameOver = () => {
    return ({type: SET_GAME_OVER})
}