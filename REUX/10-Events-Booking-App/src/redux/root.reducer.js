import {combineReducers} from "redux";
import {EVENTS_FEATURE_KEY, eventsReducer} from "./events/events.reducer";
import {userReducer, USERS_FEATURE_KEY} from "./users/users.reducer";
import {ALERT_FEATURE_KEY, alertReducer} from "./alert/alert.reducer";

let rootReducer = combineReducers({
    [EVENTS_FEATURE_KEY] : eventsReducer,
    [USERS_FEATURE_KEY] : userReducer,
    [ALERT_FEATURE_KEY] : alertReducer
});

export {rootReducer};
