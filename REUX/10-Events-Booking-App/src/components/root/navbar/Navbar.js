import React from "react";
import {Link, useHistory} from 'react-router-dom';
import brandImage from '../../../assets/img/events-now.png';
import {useDispatch, useSelector} from "react-redux";
import {USERS_FEATURE_KEY} from "../../../redux/users/users.reducer";
import {logOut} from "../../../redux/users/users.actions";

let Navbar = () => {
    let history = useHistory();
    let dispatch = useDispatch();
    let userInfo = useSelector((state) => {
        return state[USERS_FEATURE_KEY];
    });

    let {isAuthenticated , loading , user} = userInfo;

    // click on logout
    let logoutUser = () => {
        dispatch(logOut(history));
    };

    let beforeLinks = (
      <React.Fragment>
          <li className="nav-item">
              <Link to='/users/login' className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
              <Link to='/users/register' className="nav-link">Register</Link>
          </li>
      </React.Fragment>
    );

    let afterLinks = (
        <React.Fragment>
            {
                user ? <li className="nav-item">
                    <Link to='/users/login' className="nav-link">
                        <img src={user.image} alt="" width="20" height="20" className="rounded-circle"/>
                        {user.name}</Link>
                </li> : null
            }
            <li className="nav-item">
                <Link to='#!' onClick={logoutUser} className="nav-link">Logout</Link>
            </li>
        </React.Fragment>
    );

    return (
        <React.Fragment>
           <nav className="navbar navbar-light bg-light navbar-expand-sm">
               <div className="container">
                   <Link to='/' className="navbar-brand">
                        <img src={brandImage} alt=""/>
                   </Link>
                   <div className="collapse navbar-collapse">
                       <ul className="navbar-nav">
                           <li className="nav-item">
                               <Link to='/events/free' className="nav-link">Free Events</Link>
                           </li>
                           <li className="nav-item">
                               <Link to='/events/pro' className="nav-link">Pro Events</Link>
                           </li>
                           {
                               isAuthenticated &&
                               <li className="nav-item">
                                   <Link to='/events/upload' className="nav-link">Upload Events</Link>
                               </li>
                           }
                       </ul>
                       <ul className="navbar-nav ml-auto">
                           {
                               !loading &&
                                   <React.Fragment>
                                       {
                                           !isAuthenticated ? beforeLinks : afterLinks
                                       }
                                   </React.Fragment>
                           }
                       </ul>
                   </div>
               </div>
           </nav>
        </React.Fragment>
    );
};
export default Navbar;
