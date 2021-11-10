import {combineReducers} from "redux";
import {messageKey, messageReducer} from "./wishMessage/wish-message.reducer";
import {productItemKey, productReducer} from "./productItem/product-item.reducer";

let rootReducer = combineReducers({
    [messageKey] : messageReducer,
    [productItemKey] : productReducer
});
export {rootReducer};
