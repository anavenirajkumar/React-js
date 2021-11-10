import Axios from "axios";
import {
    FETCH_FREE_EVENTS_FAILURE,
    FETCH_FREE_EVENTS_REQUEST,
    FETCH_FREE_EVENTS_SUCCESS,
    FETCH_PRO_EVENTS_FAILURE,
    FETCH_PRO_EVENTS_REQUEST,
    FETCH_PRO_EVENTS_SUCCESS,
    UPLOAD_EVENTS_FAILURE,
    UPLOAD_EVENTS_REQUEST,
    UPLOAD_EVENTS_SUCCESS
} from "./events.actionTypes";

// fetchFreeEvents
let fetchFreeEvents = () => {
    return async (dispatch) => {
        try {
            dispatch({ type : FETCH_FREE_EVENTS_REQUEST});
            let dataURL = `http://127.0.0.1:5000/events/free-events`;
            let response = await Axios.get(dataURL);
            dispatch({ type : FETCH_FREE_EVENTS_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({ type : FETCH_FREE_EVENTS_FAILURE , payload : error});
        }
    };
};

// fetchProEvents
let fetchProEvents = () => {
    return async (dispatch) => {
        try {
            dispatch({ type : FETCH_PRO_EVENTS_REQUEST});
            let dataURL = `http://127.0.0.1:5000/events/pro-events`;
            let response = await Axios.get(dataURL);
            dispatch({ type : FETCH_PRO_EVENTS_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({ type : FETCH_PRO_EVENTS_FAILURE , payload : error});
        }
    };
};

// uploadEvent
let uploadEvents = (event, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type : UPLOAD_EVENTS_REQUEST});
            let dataURL = `http://127.0.0.1:5000/events/upload`;
            let response = await Axios.post(dataURL, event);
            dispatch({ type : UPLOAD_EVENTS_SUCCESS , payload : response.data});
            // redirect the the respective pages based on events
            (event.type === 'FREE') ? history.push('/events/free') :  history.push('/events/pro');
        }
        catch (error) {
            dispatch({ type : UPLOAD_EVENTS_FAILURE , payload : error});
        }
    };
};
export {fetchFreeEvents , fetchProEvents , uploadEvents};

