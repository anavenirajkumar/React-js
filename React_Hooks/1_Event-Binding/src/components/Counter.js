import React, {useState} from "react";

let Counter = () => {
    let [counter , setCounter] = useState(0); /////////////////////////// useStates()

    let incrCounter = () => {       ///////////////////////////
        setCounter(counter  + 1)
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h1>Counter : {counter}</h1>
                                <button onClick={incrCounter} className="btn btn-success btn-sm">click</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Counter;
