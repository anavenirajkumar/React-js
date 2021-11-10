import { applyMiddleware, createStore} from "redux";
import {rootReducer} from "./root.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger'; //npm install redux-logger  => for console in browser
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export {store};