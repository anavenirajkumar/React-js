import React, {useState} from "react";
import {useParams , Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {EMPLOYEE_FEATURE_KEY} from "../../redux/employees/employees.reducer";

let EmployeeDetails = () => {
    let [employeeId , setEmployeeId] = useState((useParams().id));

    // fetching data from Redux Store
    let selectedEmployeeInfo = useSelector((state) => {
        let employees = state[EMPLOYEE_FEATURE_KEY].employees;
        let singleEmployee = employees.find((employee) => {
            return employee.login.uuid === employeeId;
        });
        return singleEmployee;
    });

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
                           Object.keys(selectedEmployeeInfo).length !== 0 ?
                               <React.Fragment>
                                   <div className="card">
                                       <div className="card-header bg-dark text-white">
                                           <p className="h4">{selectedEmployeeInfo.name.title} {selectedEmployeeInfo.name.first} {selectedEmployeeInfo.name.last}</p>
                                       </div>
                                       <div className="card-body">
                                           <div className="row align-items-center">
                                               <div className="col-md-4">
                                                   <img alt="" src={selectedEmployeeInfo.picture.large} className="img-fluid img-thumbnail d-block m-auto"/>
                                               </div>
                                               <div className="col-md-8">
                                                   <ul className="list-group">
                                                       <li className="list-group-item list-group-item-dark">
                                                           Age : {selectedEmployeeInfo.dob.age} Yrs.
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           Email : {selectedEmployeeInfo.email}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           City : {selectedEmployeeInfo.location.city}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           State : {selectedEmployeeInfo.location.state}
                                                       </li>
                                                       <li className="list-group-item list-group-item-dark">
                                                           Phone : {selectedEmployeeInfo.phone}
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="card-footer">
                                           <Link to="/employees" className="btn btn-dark btn-sm">Back</Link>
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
export default EmployeeDetails;
