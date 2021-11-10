import {combineReducers} from "redux";
import { userReducer, USER_FEATURE_KEY } from "./users/users.reducers";
import { alertReducer, ALERT_FEATURE_KEY } from "./layout/alert.reducers";

let rootReducer = combineReducers({
    [USER_FEATURE_KEY] : userReducer,
    [ALERT_FEATURE_KEY] : alertReducer,

});
export {rootReducer}