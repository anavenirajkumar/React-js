import {combineReducers} from "redux";
import { PRODUCT_FEATURE_KEY, productReducer } from "./products/products.reducer";
import { userReducer, USER_FEATURE_KEY } from "./users/users.reducers";
import { alertReducer, ALERT_FEATURE_KEY } from "./layout/alert.reducers";
import { orderReducer, ORDER_FEATURE_KEY } from "./orders/orders.reducer";

let rootReducer = combineReducers({
    [PRODUCT_FEATURE_KEY] : productReducer,
    [USER_FEATURE_KEY] : userReducer,
    [ALERT_FEATURE_KEY] : alertReducer,
    [ORDER_FEATURE_KEY] : orderReducer
});
export {rootReducer}