import React, {Fragment, useState} from "react";

let ShowPassword = () => {
    let [inputType , setInputType] = useState('password');

    let updateInput = (e) => {
        (inputType === 'password') ? setInputType('text') : setInputType('password');
    };

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h4">Show Password</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <input onChange={updateInput} type="checkbox"
                                                       aria-label="Checkbox for following text input"/>
                                            </div>
                                        </div>
                                        <input type={inputType} className="form-control"
                                               aria-label="Text input with checkbox"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default ShowPassword;
