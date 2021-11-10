import React, {Fragment, useState} from "react";
import ChildCard from "./ChildCard";

let ParentCard = () => {
    let [parentInput , setParentInput] = useState('');

    let [childData , setChildData] = useState('');   // Receive Dara From Child

    let receiveChildData = (value) => {        // Receive Dara From Child
        setChildData(value);
    };

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card m-3">
                            <div className="card-body bg-success text-white">
                                <p className="h3">Parent Component</p>
                                <p className="lead">From Child : {childData}</p>           
                                <form>
                                    <div className="form-group">
                                        <input
                                            value={parentInput}
                                            onChange={(e) => setParentInput(e.target.value)}
                                            type="text" className="form-control" placeholder=""/>
                                    </div>
                                </form>
                                <ChildCard message={parentInput} sendChildData={receiveChildData}/>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default ParentCard;
