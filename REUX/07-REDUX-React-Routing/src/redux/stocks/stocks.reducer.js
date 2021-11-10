import {FETCH_STOCKS_FAILURE, FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS} from "./stocks.actionTypes";

export const STOCK_FEATURE_KEY = 'stock';

let initialState = {
    loading : false,
    stocks : [],
    errorMessage : ''
};

let stockReducer = (state=initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_STOCKS_REQUEST:
            return {
                ...state,
                loading : true
            };
        case FETCH_STOCKS_SUCCESS:
            return {
                ...state,
                loading : false,
                stocks: payload
            };
        case FETCH_STOCKS_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        default : return state;
    }
};
export {stockReducer};
