import React, {Fragment, useContext} from "react";
import {UserContext} from "../context/UserContext";
import {AppContext} from "../context/AppContext";

let ComponentC = () => {
    let userInfo = useContext(UserContext);
    let appInfo = useContext(AppContext);
    return(
        <Fragment>
            <div className="card m-3">
                <div className="card-body bg-danger text-white">
                    <p className="h4">Component C</p>
                    <small>{JSON.stringify(userInfo)}</small><br/>
                    <small>{JSON.stringify(appInfo)}</small>
                </div>
            </div>
        </Fragment>
    );
};
export default ComponentC;
