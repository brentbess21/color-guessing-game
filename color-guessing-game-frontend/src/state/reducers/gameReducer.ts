import {SET_WINNER, START_GAME} from "../actions/gameActions";


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
            console.log(action.payload)
            return ({...state, currentGame: action.payload})
        case (SET_WINNER):
            return({...state, currentGame: { ...state.currentGame, hasWon: true}})
        default:
            return state
    }
}

export default gameReducer;