import React, { useEffect, useState } from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';

let Employees = () => {
    let [employees, setEmployees] = useState([]);  // Employees Total Data Array Of Objects Vundi
    
useEffect(() => {
    let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/d8352c4a54447d68f3460bc7672fc307/raw/93c05e26207ff1f9f4f1db617fd496ba1b901abd/employees-20082020.json`;
    Axios.get(dataURL).then((responce) => {
        setEmployees(responce.data)
    }).catch((err) => {
        console.error(err);
    });
}, []); //  []) Every Second Keep Fetching Console to Stop
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employees Information</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt doloremque excepturi inventore ipsa magni molestias officia, officiis possimus quasi, quidem repellat sit vero? Debitis expedita ipsum maiores mollitia repellat.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                         {
                             employees.length > 0 ?
                             <React.Fragment>
                                 <table className="table table-hover text-center table-striped table-light">
                                     <thead className="bg-dark text-white">
                                        <tr>
                                            <th>Emp ID</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                        </tr>
                                     </thead>
                                     <tbody>
                                         {
                                             employees.map((employee) => {
                                                 return(
                                                     <tr key={employee.login.uuid}>
                                                         <td>{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                                         <td>
                                                             <img alt="" src={employee.picture.large} width="50" height="50"/>
                                                         </td>
                                                         <td>
                                                 <Link to = {`/employees/${employee.login.uuid}`} className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link>
                                                         </td>
                                                         <td>{employee.dob.age} Yrs.</td>
                                                         <td>{employee.email}</td>
                                                         <td>{employee.location.city}</td>
                                                     </tr>
                                                 )
                                             })
                                         }
                                     </tbody>
                                 </table>
                             </React.Fragment> : null
                         }
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};
export default Employees;
