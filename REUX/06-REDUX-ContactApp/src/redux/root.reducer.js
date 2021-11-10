import {combineReducers} from "redux";
import {CONTACT_FEATURE_KEY, contactReducer} from "./contacts/contacts.reducer";   // contact.reduser.js => root.reduser.js

let rootReducer = combineReducers({
    [CONTACT_FEATURE_KEY] : contactReducer  // import CONTACT_FEATURE_KEY from contact.reduser.js
});

export {rootReducer};
