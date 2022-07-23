import {
    SET_CURRENT_USER,
    START_FETCH_CURRENT_USER,
    SUCCESS_FETCH_CURRENT_USER
} from "../actions/userActions";

const initialState = {
    loading: false,
    currentUser: null
}

interface UserAction {
    type: string;
    payload: any;
}

const userReducer = (state : Model.User.UserState = initialState, action : UserAction) => {
    //@ts-ignore
    const user = JSON.parse(localStorage.getItem('user'))
    switch (action.type) {
        case(SET_CURRENT_USER) :
            localStorage.setItem('user', JSON.stringify(action.payload))
            return ({
                ...state,
                currentUser : action.payload
            });
        case(START_FETCH_CURRENT_USER) :
            return({...state, loading: true, currentUser: null});
        case(SUCCESS_FETCH_CURRENT_USER):
            return ({...state, loading: false, currentUser: action.payload})
        default:
            return state
    }
}

export default userReducer;