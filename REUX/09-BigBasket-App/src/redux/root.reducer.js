import {combineReducers} from "redux";
import {BIG_BASKET_FEATURE_KEY, bigBasketReducer} from "./bigBasket/bigBasket.reducer";

let rootReducer = combineReducers({
    [BIG_BASKET_FEATURE_KEY] : bigBasketReducer
});

export {rootReducer};
