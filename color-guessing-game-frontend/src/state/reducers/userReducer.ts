import { SET_CURRENT_USER, FETCH_CURRENT_USER } from "../actions/userActions";

export const initialState = {
   currentUser: null
}

interface UserAction {
    type: string;
    payload: any;
}

const userReducer = (state : Model.User.UserState = initialState, action : UserAction) => {
    switch (action.type) {
        case(SET_CURRENT_USER) :
            localStorage.setItem('user', JSON.stringify(action.payload))
            return ({
                ...state,
                currentUser : action.payload
            });
        case(FETCH_CURRENT_USER) :
            if(!localStorage.getItem('user')) return ({
                ...state,
                currentUser: null
            })
            // @ts-ignore
            let user = JSON.parse(localStorage.getItem('user'))
            return ({
                ...state,
                currentUser : user
            });
        default:
            return state
    }
}

export default userReducer;