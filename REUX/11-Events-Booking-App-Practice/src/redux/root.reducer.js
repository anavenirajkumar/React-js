import {combineReducers} from "redux";
import { eventsReduser, EVENTS_FEATURE_KEY } from './events/events.reduser';  // import
import { userReduser, USERS_FEATURE_KEY } from "./users/users.reduser";      // import

let rootReducer = combineReducers({
    [EVENTS_FEATURE_KEY] : eventsReduser,                                 //
    [USERS_FEATURE_KEY] : userReduser                                    //
});

export {rootReducer};
