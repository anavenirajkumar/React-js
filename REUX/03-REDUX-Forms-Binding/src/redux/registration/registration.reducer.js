import {REGISTER_USER} from "./registration.actionTypes";

export const registrationFeatureKey = 'register';

let initialState = {
    username : '',
    email : '',
    password : '',
    terms : false
};

let registrationReducer = (state=initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case REGISTER_USER:
            return {
                ...state,
                ...payload
            };
        default : return  state;
    }
};
export {registrationReducer};
