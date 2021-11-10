import React, { Fragment, useState } from 'react';

let HobbySelectorRadio = () => {
    
    let [hobby, seHobby] = useState('');

    return(
        <Fragment> 
            <pre>{JSON.stringify(hobby)}</pre>
                 <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Hobby Selector Radio</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <form>
                                            <div className="form-check">
                                                <input
                                                    onChange={(e)=>seHobby(e.target.value)}
                                                    className="form-check-input" type="radio"
                                                    name="exampleRadios" id="exampleRadios1" value="eating"
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                  onChange={(e)=>seHobby(e.target.value)}
                                                    className="form-check-input" type="radio"
                                                    name="exampleRadios" id="exampleRadios2" value="coding"/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    onChange={(e)=>seHobby(e.target.value)}
                                                    className="form-check-input" type="radio"
                                                    name="exampleRadios" id="exampleRadios3" value="sleeping"
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios3">
                                                    Sleeping
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-8">
                                            {
                                                hobby === 'eating' ?
                                            <Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-success text-white">
                                                        <p className="h4">Eating</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                             </Fragment> : null
                                            } 
                                            { 
                                               hobby === "coding" ?
                                           <Fragment>
                                              <div className="card animated jello">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h4">Coding</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                             </Fragment> : null
                                            } 
                                        { 
                                            hobby ==="sleeping" ?
                                           <Fragment>
                                             <div className="card animated jello">
                                                    <div className="card-body bg-danger text-white">
                                                        <p className="h4">Sleeping</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                            </div>
                                           </Fragment> : null
                                        }  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default HobbySelectorRadio;