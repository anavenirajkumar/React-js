import Axios from "axios";
import {FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS} from "./employees.actionTypes";

let fetchEmployees = () => {
    return (dispatch) => {
        dispatch({ type : FETCH_EMPLOYEES_REQUEST});
        let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/d8352c4a54447d68f3460bc7672fc307/raw/93c05e26207ff1f9f4f1db617fd496ba1b901abd/employees-20082020.json`;
        Axios.get(dataURL).then((response) => {
            dispatch({ type : FETCH_EMPLOYEES_SUCCESS , payload : response.data});
        }).catch((error) => {
            dispatch({ type : FETCH_EMPLOYEES_FAILURE , payload : error});
        });
    }
};
export {fetchEmployees};
