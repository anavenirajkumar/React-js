import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Employees from "./components/employees/Employees";
import Stocks from "./components/stocks/Stocks";
import StockDetails from "./components/stocks/StockDetails";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import {Provider} from "react-redux";
import {store} from "./redux/store";

let App = () => {

    return(
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/employees" component={Employees}/>
                        <Route exact path="/employees/:id" component={EmployeeDetails}/>
                        <Route exact path="/stocks" component={Stocks}/>
                        <Route exact path="/stocks/:id" component={StockDetails}/>
                    </Switch>
                </Router>
            </Provider>

        </React.Fragment>
    );
};
export default App;
