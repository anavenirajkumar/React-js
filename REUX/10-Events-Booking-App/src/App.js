import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {store} from "./redux/store";
import Navbar from "./components/root/navbar/Navbar";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from "./components/root/home/Home";
import FreeEvents from "./components/events/free-events/FreeEvents";
import ProEvents from "./components/events/pro-events/ProEvents";
import UploadEvents from "./components/events/upload/UploadEvents";
import Login from "./components/users/login/Login";
import Register from "./components/users/register/Register";
import {getUserInfo} from "./redux/users/users.actions";
import PrivateRoute from "./router/PrivateRoute";
import {USERS_FEATURE_KEY} from "./redux/users/users.reducer";
import Alert from "./components/root/alert/Alert";

let App = () => {
    let {isAuthenticated} = useSelector((state) => {
        return state[USERS_FEATURE_KEY];
    });

    useEffect(() => {
        if(isAuthenticated){
            store.dispatch(getUserInfo());
        }
    },[isAuthenticated]);

    return(
        <React.Fragment>
               <Router>
                   <Navbar/>
                   <div>
                       <Alert/>
                   </div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/events/free' component={FreeEvents}/>
                        <PrivateRoute exact path='/events/pro' component={ProEvents}/>
                        <PrivateRoute exact path='/events/upload' component={UploadEvents}/>
                        <Route exact path='/users/login' component={Login}/>
                        <Route exact path='/users/register' component={Register}/>
                    </Switch>
               </Router>
        </React.Fragment>
    );
};
export default App;
