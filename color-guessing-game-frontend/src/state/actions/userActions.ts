import { Dispatch } from 'redux';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const START_FETCH_CURRENT_USER = 'START_FETCH_CURRENT_USER';
export const SUCCESS_FETCH_CURRENT_USER = 'SUCCESS_FETCH_CURRENT_USER';

export const setCurrentUser = (user : Model.User.User)=> {
    return ({type: SET_CURRENT_USER, payload: user})
}

export const fetchCurrentUser = () => (dispatch : Dispatch) => {
    dispatch({type: START_FETCH_CURRENT_USER});
    //@ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({type: SUCCESS_FETCH_CURRENT_USER, payload: user});
}