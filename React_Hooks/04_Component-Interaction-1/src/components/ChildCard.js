import React, {Fragment, useState} from "react";

let ChildCard = (props) => {
    let [childInput , setChildInput] = useState('');

    let updateInput = (e) => {
        setChildInput(e.target.value);     
        props.sendChildData(e.target.value);   // Send Data To Parent
    };

    return(
          <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card m-3">
                            <div className="card-body bg-danger text-white">
                                <p className="h3">Child Component</p>
                                <form>
                                    <div className="form-group">
                                        <input
                                            value={childInput}
                                            onChange={updateInput}
                                            type="text" className="form-control"/>
                                    </div>
                                </form>
                                <p className="lead">From Parent : {props.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default ChildCard;
