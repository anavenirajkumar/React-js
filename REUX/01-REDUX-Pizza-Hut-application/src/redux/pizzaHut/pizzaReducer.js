import {BUY_PIZZA} from "./pizzaActionTypes";

let initialState = {
    count : 35
}

const pizzaReducer = (state = initialState , action) => {
     switch(action.type) {
        case BUY_PIZZA:
            return {
                count : (state.count - 1 > 0) ? state.count - 1 : 0
            };
        default : return state;
     }
};

export {pizzaReducer};