import React, { Fragment } from 'react';

let ComponentC = (props) => {
    return(
        <Fragment>
               <div className="card mt-3">
                 <div className="card-body bg-danger text-white">
                    <small>{JSON.stringify(props.userInfo)}</small>
                     <p className="h4">Component C</p>
                 </div>
             </div>
        </Fragment>
    )
}
export default ComponentC;