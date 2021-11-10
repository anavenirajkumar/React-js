import {combineReducers} from "redux";
import {EMPLOYEE_FEATURE_KEY, employeeReducer} from "./employees/employees.reducer";
import {STOCK_FEATURE_KEY, stockReducer} from "./stocks/stocks.reducer";

let rootReducer = combineReducers({
    [EMPLOYEE_FEATURE_KEY] : employeeReducer,
    [STOCK_FEATURE_KEY] : stockReducer
});

export {rootReducer};
