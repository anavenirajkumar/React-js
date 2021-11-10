import React, { Fragment, useEffect, useState } from 'react';

let DigitalWatch=()=>{
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    
 useEffect(()=>{
     // ComponentDidMount
     let timer = setInterval(()=>{
        setCurrentTime(new Date().toLocaleTimeString());
     }, 1000);
     return () => {
         // ComponentWillUnMount
         clearInterval(timer);
     }
 });
    return(
        <Fragment>
                <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Digital Watch</p>
                            </div>
                            <div className="card-body">
                                <h3 className="display-3">{currentTime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </Fragment>
    )
}
export default DigitalWatch;