import { FETCH_FREE_EVENTS_FAILURE, FETCH_FREE_EVENTS_REQUEST, FETCH_FREE_EVENTS_SUCCESS, FETCH_PRO_EVENTS_FAILURE, FETCH_PRO_EVENTS_REQUEST, FETCH_PRO_EVENTS_SUCCESS, UPLOAD_EVENTS_FAILURE, UPLOAD_EVENTS_REQUEST, UPLOAD_EVENTS_SUCCESS } from './events.actionTypes';

export const EVENTS_FEATURE_KEY = 'event';  // SOME FEATURE KEY events.reduser.js

let initialState = {                        // initialState in browser reduxDevTools
    loading : false,  //loading is default false
    events : [],         // arrray
    errorMessage : ''   // if any error
};

let eventsReduser = (state = initialState, action) => {               // eventsReduser
    let {type , payload} = action;
    switch(type) {
        case FETCH_FREE_EVENTS_REQUEST:
        case FETCH_PRO_EVENTS_REQUEST:
        case UPLOAD_EVENTS_REQUEST:
            return{
                ...state,       // spread operator
                loading: true    // any request is loading
            };
        case FETCH_FREE_EVENTS_SUCCESS:
        case FETCH_PRO_EVENTS_SUCCESS :
            return {
                ...state,
                loading : false,    // success time loading false
                events : payload     // some payload
            };
            case UPLOAD_EVENTS_SUCCESS:
                return {
                    ...state,
                    loading : false,
                };
        case FETCH_FREE_EVENTS_FAILURE:
        case FETCH_PRO_EVENTS_FAILURE:
        case UPLOAD_EVENTS_FAILURE:
            return{
                ...state,
                loading : false,
                errorMessage : payload
            };
        default : return state;
    }
};

export {eventsReduser};