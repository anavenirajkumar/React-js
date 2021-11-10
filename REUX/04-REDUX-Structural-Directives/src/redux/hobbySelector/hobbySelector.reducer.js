import {SELECT_CODING, SELECT_EATING, SELECT_SLEEPING} from "./hobbySelector.actionTypes";

export const HOBBY_SELECTOR_FEATURE_KEY = 'hobbySelector';

let initialState = {
    eating : false,
    coding : false,
    sleeping : false
};

let hobbySelectReducer = (state=initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case SELECT_EATING:
            return {
                ...state,
                eating : !state.eating
            };
        case SELECT_CODING:
            return {
                ...state,
                coding : !state.coding
            };
        case SELECT_SLEEPING:
            return {
                ...state,
                sleeping : !state.sleeping
            };
        default: return state;
    }
};
export {hobbySelectReducer};
