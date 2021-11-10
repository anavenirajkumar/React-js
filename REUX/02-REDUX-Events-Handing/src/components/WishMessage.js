import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {messageKey, messageReducer} from "../redux/wishMessage/wish-message.reducer";
import {sayGoodAfternoon, sayGoodEvening, sayGoodMorning} from "../redux/wishMessage/wish-message.actions";

let WishMessage = () => {
    let dispatch = useDispatch();

    // fetch data from the store
    let messageInfo = useSelector((state) => {
        return state[messageKey];
    });

   /* let clickGoodMorning = () => {
        dispatch(sayGoodMorning());
    };
*/
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">{messageInfo.message}</p>
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
export default WishMessage;
