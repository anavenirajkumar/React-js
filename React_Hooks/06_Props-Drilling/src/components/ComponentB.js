import React, { Fragment } from 'react';
import ComponentC from './ComponentC';

let ComponentB = (props) => {
    return(
        <Fragment>
           <div className="card mt-3">
                 <div className="card-body bg-success text-white">
                      <small>{JSON.stringify(props.userInfo)}</small>
                     <p className="h4">Component B</p>
                     <ComponentC userInfo={props.userInfo}></ComponentC>
                 </div>
             </div>
        </Fragment>
    )
}
export default ComponentB;