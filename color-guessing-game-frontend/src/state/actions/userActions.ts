export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const setCurrentUser = (user : Model.User.User)=> {
    return ({type: SET_CURRENT_USER, payload: user})
}

export const fetchCurrentUser = () => {
    return ({type: FETCH_CURRENT_USER})
}