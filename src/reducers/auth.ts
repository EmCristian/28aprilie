import { User } from "../Models/User"

interface initialState {
    isLoggedin: boolean;
    user: User | null
}

const initialState: initialState = {
    isLoggedin: false,
    user: null
}

export const authReducer = (state = initialState, action:any ) => {
    switch(action.type) {
        case 'SIGN_IN':
            return state;
        case 'SIGN_UP':
            return state;
        default:
            return state;
    }
}