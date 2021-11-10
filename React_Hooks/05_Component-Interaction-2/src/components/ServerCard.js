import React, {Fragment, useState} from "react";

let ServerCard = (props) => {
    let [message , setMessage] = useState('');

    let sendToClient = (e) => {
        e.preventDefault();
        props.sendToApp(message);       // Server Card to App.js  App.js to Client Card
    };

    return(
        <Fragment>
            <div className="card">
                <div className="card-header bg-danger text-white">
                    <p className="h4">Server Card</p>
                </div>
                <div className="card-body">
                    <form onSubmit={sendToClient}>
                        <div className="form-group">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type="text" className="form-control"/>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-danger btn-sm" value="send"/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <p className="h5">From Client : {props.clientMessage}</p>
                </div>
            </div>
        </Fragment>
    )
};
export default ServerCard;
