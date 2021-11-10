import React from "react";
import ComponentC from "./ComponentC";

let ComponentB = () => {
    return(
        <React.Fragment>
            <div className="card m-3">
                <div className="card-body bg-warning text-white">
                    <p className="h4">Component B</p>
                    <ComponentC/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ComponentB;
