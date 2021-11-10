import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCoding, selectEating, selectSleeping} from "../redux/hobbySelector/hobbySelector.actions";
import {HOBBY_SELECTOR_FEATURE_KEY} from "../redux/hobbySelector/hobbySelector.reducer";

let HobbySelectorCheck = () => {
    let dispatch = useDispatch();

    let hobbyState = useSelector((state) => {
        return state[HOBBY_SELECTOR_FEATURE_KEY];
    });

    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(hobbyState)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Hobby Selector</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input
                                                name="eating"
                                                onChange={() => dispatch(selectEating())}
                                                className="form-check-input" type="checkbox"
                                                id="defaultCheck1"/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Eating
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="coding"
                                                onChange={() => dispatch(selectCoding())}
                                                className="form-check-input" type="checkbox"
                                                id="defaultCheck2"/>
                                            <label className="form-check-label" htmlFor="defaultCheck2">
                                                Coding
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="sleeping"
                                                onChange={() => dispatch(selectSleeping())}
                                                className="form-check-input" type="checkbox"
                                                id="defaultCheck3"/>
                                            <label className="form-check-label" htmlFor="defaultCheck3">
                                                Sleeping
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        {
                                            hobbyState.eating ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h4">Eating</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobbyState.coding ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-warning text-white">
                                                            <p className="h4">Coding</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobbyState.sleeping ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-danger text-white">
                                                            <p className="h4">Sleeping</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default HobbySelectorCheck;
