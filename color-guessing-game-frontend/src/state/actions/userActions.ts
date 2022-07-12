export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user : Model.User.User)=> {
    return ({type: SET_CURRENT_USER, payload: user})
}