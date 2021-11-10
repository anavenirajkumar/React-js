import React, {useReducer} from "react";

// Action Types
let GOOD_MORNING = 'GOOD_MORNING';
let GOOD_AFTERNOON = 'GOOD_AFTERNOON';
let GOOD_EVENING = 'GOOD_EVENING';

// initial State
let initialState = {
    message : 'Hello'
};

// action Creators
let sayGoodMorning = () => {
    return {
        type : GOOD_MORNING,
        payload : 'Say Good Morning'
    }
};

let sayGoodAfternoon = () => {
    return {
        type : GOOD_AFTERNOON,
        payload : 'Say Good Afternoon'
    }
};

let sayGoodEvening = () => {
    return {
        type : GOOD_EVENING,
        payload : 'Say Good Evening'
    }
};

let reducer = (state = initialState , action) => {
    switch(action.type) {
        case GOOD_MORNING: return {
            message : 'Good Morning'
        };
        case GOOD_AFTERNOON: return {
            message : 'Good Afternoon'
        };
        case GOOD_EVENING: return {
            message : 'Good Evening'
        };
        default : return state;
    }
};

let MessageFive = () => {
    let [state , dispatch] = useReducer(reducer , initialState);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">useReducer() Hook with REDUX Style</p>
                            </div>
                            <div className="card-body">
                                <p className="h3">{state.message}</p>
                                <button onClick={() => dispatch(sayGoodMorning())} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={() => dispatch(sayGoodAfternoon())} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={() => dispatch(sayGoodEvening())} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default MessageFive;
