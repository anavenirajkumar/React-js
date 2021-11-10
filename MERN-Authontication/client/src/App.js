import './App.css';
import React, { useEffect } from "react";
import {BrowserRouter as Router, Route , Switch } from "react-router-dom"
import Home from "./modules/layout/components/home/Home";
import Homepage from "./modules/layout/components/home/Homepage";

import AddUser from "./modules/layout/components/home/AddUser";
import AllUsers from "./modules/layout/components/home/AllUsers";
import EditUser from "./modules/layout/components/home/EditUser";


import Profile from "./modules/users/components/profile/Profile";
import Login from "./modules/users/components/login/Login";
import Register from "./modules/users/components/register/Register";
import Alert from './modules/layout/components/alert/Alert';
import { getUserInfo } from "../src/redux/users/users.actions";
import { store } from "./redux/store";
import PrivateRoute from './router/PrivateRoute';
import Nav from './modules/layout/components/navbar/Nav';
import Footer from './modules/layout/components/footer/Footer';



let App = () => {

  useEffect(() => {
      store.dispatch(getUserInfo());
      // store.dispatch(getAllOrders());
      // store.dispatch(PlaceOrder());
  }, []);  ////// Refresh The Page User Information Automatically Come and Show on Browser
  
  return (
    <div className="App">
       <Router>
       {/* <Navbar></Navbar> */}
       <Nav></Nav>
       <div>
         <Alert></Alert>
       </div>
            <Switch>
               <Route exact path="/" component={Homepage}></Route>
               <Route exact path="/all" component={AllUsers} />
              <PrivateRoute exact path="/add" component={AddUser} />
              <Route exact path="/edit/:id" component={EditUser} />
                {/* <Route exact path="/" component={Home}></Route> */}
                <Route exact path="/users/profile"component={Profile}></Route>
                <Route exact path="/users/login" component={Login}></Route>
                <Route exact path="/users/register" component={Register}></Route>
            </Switch>

            {/* <Footer></Footer> */}
       </Router>
    </div>
  );
}

export default App;
