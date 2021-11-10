import React from "react";
import {useSelector} from "react-redux";
import {ALERT_FEATURE_KEY} from "../../../../redux/layout/alert.reducers";

let Alert = () => {

    let alertInfo = useSelector((state) => {
        return state[ALERT_FEATURE_KEY];
    });

    return (
        <React.Fragment>
            {
                alertInfo.length > 0 ?
                    <React.Fragment>
                        {
                            alertInfo.map(alert => {
                                return (
                                    <div key={alert.id} className={`alert alert-${alert.color} alert-dismissible animated slideInDown fixed-top m-3`}>
                                        <button className="close">
                                            <i className="fa fa-times-circle"/>
                                        </button>
                                        <small>{alert.message}</small>
                                    </div>
                                )
                            })
                        }
                    </React.Fragment> : null
            }

{/* {
                alertInfo.length > 0 ?
                    <React.Fragment>
                        {
                            alertInfo.map(alert => {
                                return (
                                    <div className="container">
                                        <div className="row">
                                            <div key={alert.id} className={`col-md-4 m-auto alert alert-${alert.color} alert-dismissible animated slideInDown fixed-top m-3`}>
                                                    <button className="close">
                                                        <i className="fa fa-times-circle"/>
                                                    </button>
                                                    <small>{alert.message}</small>
                                            </div>
                                        </div>
                                   </div>
                                )
                            })
                        }
                    </React.Fragment> : null
            }    */}
        </React.Fragment>
    )
};
export default Alert;
