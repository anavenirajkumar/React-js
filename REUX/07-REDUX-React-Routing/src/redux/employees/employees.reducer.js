import {FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS} from "./employees.actionTypes";

export const EMPLOYEE_FEATURE_KEY = 'employee';

let initialState = {
    loading : false,
    employees : [],
    errorMessage : ''
};

let employeeReducer  = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            };
        case FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return  state;
    }
};
export {employeeReducer};
