import React, {useContext} from "react";
import ComponentB from "./ComponentB";
import {UserContext} from "../context/UserContext";

let ComponentA = () => {
    return(
        <React.Fragment>
            <div className="card m-3">
                <div className="card-body bg-primary text-white">
                    <p className="h4">Component A</p>
                    <ComponentB/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ComponentA;
