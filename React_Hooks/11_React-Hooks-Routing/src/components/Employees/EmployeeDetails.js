import React, { useState } from 'react';
import {useParams, Link} from 'react-router-dom'; // Params
import Axios from "axios";

let EmployeeDeatils = () => {
    let [employeeId , setEmployeeId] = useState((useParams().id));   // useParams().id
    let [selectedEmployee, setSelectedEmployee] = useState({}); // SelectedEmployee
    
    useState(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/d8352c4a54447d68f3460bc7672fc307/raw/93c05e26207ff1f9f4f1db617fd496ba1b901abd/employees-20082020.json';
        Axios.get(dataURL).then((responce) => {
            let employees = responce.data;
            let singleEmployee = employees.find((employee) => {  // find
                return employee.login.uuid === employeeId; // return to employees
            });
            setSelectedEmployee(singleEmployee);
        }).catch((err) => {
            console.error(err);
        });
    }, [employeeId]);

    return(
        <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h3">Employee Details</p>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, animi atque consequatur culpa distinctio eius expedita hic illo illum magni maxime nemo nobis officia officiis porro soluta tempora, totam.</p>
                   </div>
               </div>
               <div className="row">
                   <div className="col">
                      {
                       Object.keys(selectedEmployee).length !==0 ?
                          <React.Fragment>
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                     <p className="h4">{selectedEmployee.name.title} {selectedEmployee.name.first} {selectedEmployee.name.last}</p>
                                </div>
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <img alt="" src={selectedEmployee.picture.large} className="img-fluid img-thumbnail d-block m-auto"/>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="list-group">
                                                     <li className="list-group-item list-group-item-dark">
                                                           Age : {selectedEmployee.dob.age} Yrs.
                                                    </li>
                                                    <li className="list-group-item list-group-item-dark">
                                                          Email : {selectedEmployee.email}
                                                    </li>
                                                    <li className="list-group-item list-group-item-dark">
                                                        City : {selectedEmployee.location.city}
                                                    </li>
                                                    <li className="list-group-item list-group-item-dark">
                                                        State : {selectedEmployee.location.state}
                                                    </li>
                                                    <li className="list-group-item list-group-item-dark">
                                                        Phone : {selectedEmployee.phone}
                                                    </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                 <div className="card-footer">
                                     <Link to ="/employees" className="btn btn-dark btn-sm">Back</Link>
                                 </div>
                            </div>
                          </React.Fragment> : null
                      }
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default EmployeeDeatils;