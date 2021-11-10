import {combineReducers} from "redux";
import {registrationFeatureKey, registrationReducer} from "./registration/registration.reducer";


let rootReducer = combineReducers({
    [registrationFeatureKey] : registrationReducer
});

export {rootReducer};
