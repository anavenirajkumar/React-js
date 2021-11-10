import React, {Fragment, useState} from "react";

let ClientCard = (props) => {
    let [message , setMessage] = useState('');

    let sendToServer = (e) => {
        e.preventDefault();
        props.sendToApp(message);      // Client Card to App.js  App.js to Server Card
    };

    return(
        <Fragment>
            <div className="card">
                <div className="card-header bg-success text-white">
                    <p className="h4">Client Card</p>
                </div>
                <div className="card-body">
                    <form onSubmit={sendToServer}>
                        <div className="form-group">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type="text" className="form-control"/>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-success btn-sm" value="send"/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <p className="h5">From Server : {props.serverMessage}</p>
                </div>
            </div>
        </Fragment>
    )
};
export default ClientCard;
