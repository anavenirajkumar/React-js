import React, {useRef, useState} from "react";

let AcceptTerms = () => {
    let [terms , setTerms] = useState(false);
    let buttonEl = useRef(null);

    let acceptTerms = (event) => {
        setTerms(event.target.checked);
        buttonEl.current.disabled = !event.target.checked;
    };

    return(
        <React.Fragment>
           {/* <pre>{JSON.stringify(terms)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-check">
                                        <input onChange={acceptTerms} className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Accept Terms & Conditions
                                            </label>
                                    </div>
                                    <div>
                                        <input ref={buttonEl} type="submit" value="submit" className="btn btn-secondary btn-sm" disabled/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default AcceptTerms;
