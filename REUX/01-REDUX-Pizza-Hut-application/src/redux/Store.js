import {combineReducers, createStore} from "redux";
import {pizzaReducer} from "./pizzaHut/pizzaReducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducer = combineReducers({
    pizza : pizzaReducer
});

let store = createStore(rootReducer,composeWithDevTools());

export {store};