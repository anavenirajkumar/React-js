import React, {useState} from "react";
import {useSelector} from "react-redux";
import {CUSTOMER_FEATURE_KEY} from "../redux/customerList/customerList.reducer";

let CustomerList = () => {

    // read data from the store
    let customerInfo = useSelector((state) => {
        return state[CUSTOMER_FEATURE_KEY];
    });

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Customers Information</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur delectus dolore modi officia quasi sequi tempora vel voluptates. Aliquid debitis dolorum facilis minima porro quas quibusdam repellendus saepe vitae!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-success">
                            <thead className="bg-success text-white">
                            <tr>
                                <th>ID</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>GENDER</th>
                                <th>EMAIL</th>
                                <th>LOCATION</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customerInfo.map((customer) => {
                                    return (
                                        <tr key={customer.login.uuid}>
                                            <td>{customer.login.uuid.substr(customer.login.uuid.length - 4)}</td>
                                            <td>
                                                <img src={customer.picture.large} width="70" height="70" className="img-thumbnail"/>
                                            </td>
                                            <td>{customer.name.first} {customer.name.last}</td>
                                            <td>{customer.dob.age} Yrs.</td>
                                            <td>{customer.gender.toUpperCase()}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.location.city}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default CustomerList;
