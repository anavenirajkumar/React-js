import React, { Fragment } from 'react';

let ContactCard = (props) => {
    return(
        <Fragment>
               <h2>Contact Card</h2>
                   {/* <pre>{JSON.stringify(props.selectedContact)}</pre> */}
                   {
                props.selectedContact ?
                    <Fragment>
                        <div className="card sticky-top">
                            <div className="card-header bg-primary">
                                <div className="p-4"/>
                            </div>
                            <div className="card-body text-center">
                                <img src={props.selectedContact.picture.large} className="img-fluid img-thumbnail rounded-circle w-50 contact-img"/>
                                <ul className="list-group text-left mt-3">
                                    <li className="list-group-item list-group-item-primary">
                                        NAME : {props.selectedContact.name.first} {props.selectedContact.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {props.selectedContact.dob.age} Yrs.
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        EMAIL : {props.selectedContact.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        ADDRESS : {props.selectedContact.location.city}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Fragment> : null
            }
        </Fragment>
    )
}
export default ContactCard;