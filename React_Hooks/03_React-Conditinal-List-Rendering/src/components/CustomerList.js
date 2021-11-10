import React, { Fragment, useState } from 'react';
import { customerList } from './customerStore';

let CustomerList = () =>{
    let [customers, setCustomers]= useState(customerList)  // Imported customerList
    return(
        <Fragment>
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
                                   customers.map((customer)=>{
                                       return(
                                           <Fragment>
                                                  <tr>
                                                       <td>{customer.login.uuid.substr(customer.login.uuid.length - 4)}</td>
                                                       <td>
                                                           <img src={customer.picture.large} alt="" className="img-fluid" width="100" height="150"/>
                                                       </td>
                                                       <td>{customer.name.first} {customer.name.last}</td>
                                                       <td>{customer.dob.age}</td>
                                                       <td>{customer.gender}</td>

                                                       <td>{customer.email}</td>
                                                       <td>{customer.location.city}</td>
                                                  </tr>
                                           </Fragment>
                                       );
                                   })
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CustomerList;