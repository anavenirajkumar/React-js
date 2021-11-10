import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployees} from "../../redux/employees/employees.actions";
import {EMPLOYEE_FEATURE_KEY} from "../../redux/employees/employees.reducer";
import Spinner from "../spinner/Spinner";

let Employees = () => {
    let dispatch = useDispatch();

    let employeeInfo = useSelector((state) => {
        return state[EMPLOYEE_FEATURE_KEY];
    });

    useEffect(() => {
        dispatch(fetchEmployees()); // to fetch all records from the server , add to store
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employees Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt doloremque excepturi inventore ipsa magni molestias officia, officiis possimus quasi, quidem repellat sit vero? Debitis expedita ipsum maiores mollitia repellat.</p>
                    </div>
                </div>
                {
                    employeeInfo.loading ? <Spinner/> : <React.Fragment>
                        <div className="row">
                            <div className="col">
                                {
                                    employeeInfo.employees.length > 0 ?
                                        <React.Fragment>
                                            <table className="table table-hover text-center table-striped table-light">
                                                <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>Emp Id</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    employeeInfo.employees.map((employee) => {
                                                        return (
                                                            <tr key={employee.login.uuid}>
                                                                <td>{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                                                <td>
                                                                    <img alt="" src={employee.picture.large} width="50" height="50"/>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/employees/${employee.login.uuid}`} className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link>
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
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
};
export default Employees;
