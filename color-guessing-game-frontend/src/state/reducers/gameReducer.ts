import {SET_WINNER, START_GAME, UPDATE_GAME_SCORE, SET_GAME_OVER, UPDATE_GUESS_COUNT} from "../actions/gameActions";


const initialState : Model.Game.GameState = {
   loading: false,
    currentGame: null
}

interface GameAction {
    type: string;
    payload: any;
}

const gameReducer = (state: Model.Game.GameState = initialState, action : GameAction) => {
    switch (action.type) {
        case(START_GAME):
            return ({...state, currentGame: action.payload})
        case (SET_WINNER):
            return({...state, currentGame: { ...state.currentGame, hasWon: true}});
        case (UPDATE_GUESS_COUNT):
            if(!state.currentGame) return
            return({...state, currentGame: {...state.currentGame, currentGuessCount: action.payload}})
        case(UPDATE_GAME_SCORE):
            if(!state.currentGame) return
            return({...state, currentGame: {...state.currentGame, score: state.currentGame.score + action.payload}})
        case(SET_GAME_OVER):
            return({...state, currentGame: {...state.currentGame, gameOver: true}});
        default:
            return state
    }
}

export default gameReducer;