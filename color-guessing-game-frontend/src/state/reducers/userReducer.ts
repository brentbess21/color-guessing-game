import { SET_CURRENT_USER } from "../actions/userActions";

export const initialState = {
   userFormValues: {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       confirmPassword: ''
   },
   currentUser: {
       id: 0,
       firstName: '',
       lastName: '',
       primaryEmail: '',
       createdOn: '',
       token: '',
   }
}

interface UserAction {
    type: string;
    payload: ()=> void;
}

const userReducer = (state : Model.User.UserState = initialState, action : UserAction) => {
    switch (action.type) {
        case(SET_CURRENT_USER) :
            localStorage.setItem('user', JSON.stringify(action.payload))
            return ({
                ...state,
                currentUser : action.payload
            })
        default:
            return state
    }
}

export default userReducer;