import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Employees from "./components/Employees/Employees";
import EmployeeDetails from "./components/Employees/EmployeeDetails";
import Stocks from "./components/Stocks/Stocks";
import StockDetails from "./components/Stocks/StockDetails";

let App = () => {
 

    return(
        <Fragment>
            <Router>
                <Navbar></Navbar>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/employees" component={Employees}/>
                        <Route exact path="/employees/:id" component={EmployeeDetails}/>
                        <Route exact path="/stocks" component={Stocks}/>
                        <Route exact path="/stocks/:id" component={StockDetails}/>

                </Switch>
            </Router>
       
        </Fragment>
    );
};
export default App;
