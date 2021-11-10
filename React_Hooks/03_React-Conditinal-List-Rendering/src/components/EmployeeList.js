import React, { Fragment, useState } from 'react';

let EmployeeList=()=>{
    let [employees, SetEmployees] = useState([
        {
            id : 101,
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
        },
        {
            id : 102,
            name : 'Mahesh',
            age : 28,
            designation : 'Sr.Software Engineer',
        },
        {
            id : 103,
            name : 'John',
            age : 45,
            designation : 'Project Manager',
        },
        {
            id : 104,
            name : 'Wilson',
            age : 55,
            designation : 'Director',
        }
    ])
    return(
        <Fragment>
              <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employee Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt ipsa magni minus nesciunt nisi officiis, rem sit veritatis voluptas?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th>Employee Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                            </tr>
                            </thead>
                            <tbody>
                                 {
                                     employees.map((emp)=>{
                                         return(
                                             <Fragment>
                                                 <tr>
                                                     <td>{emp.id}</td>
                                                     <td>{emp.name}</td>
                                                     <td>{emp.age}</td>
                                                     <td>{emp.designation}</td>
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
export default EmployeeList;