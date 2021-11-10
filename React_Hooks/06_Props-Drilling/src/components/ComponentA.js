import React, { Fragment } from 'react';
import ComponentB from './ComponentB';

let ComponentA = (props) => {

    return(
        <Fragment>
             <div className="card mt-3">
                 <div className="card-body bg-primary text-white">
                     <p className="h4">Component A</p>
                         <small>{JSON.stringify(props.userInfo)}</small>
                     <ComponentB userInfo={props.userInfo}></ComponentB>
                 </div>
             </div>
        </Fragment>
    )
}
export default ComponentA;