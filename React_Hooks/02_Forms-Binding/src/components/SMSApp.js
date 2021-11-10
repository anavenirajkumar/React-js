import React, {Fragment, useState} from "react";

let SMSApp = () => {
    let [count , setCount] = useState(0);
    let [maxLength , setMaxLength] = useState(100);
    return(
        <Fragment>
            {/* <pre>{JSON.stringify(this.state)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">SMS Application</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea
                                            onChange={(e) => setCount(e.target.value.length)}
                                            maxLength={maxLength}
                                            rows="4" className="form-control" placeholder="Your Message Here"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h4">Characters Remaining :
                                    <span className="font-weight-bold">{ maxLength - count}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default SMSApp;
