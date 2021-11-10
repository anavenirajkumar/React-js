import React, {Fragment, useState} from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import ProductAdmin from './components/products/ProductAdmin';
import CreateProduct from './components/products/CreateProduct';
import ProductList from './components/products/ProductList';
import UpdateProduct from './components/products/UpdateProduct';


let App = () => {

 

    return(
        <Fragment>
           <Router>
               <Navbar></Navbar>
                  <Switch>
                      <Route exact path="/" component = {Home}/>
                      <Route exact path='/products' component={ProductList}/>
                      <Route exact path='/admin' component={ProductAdmin}/>
                      <Route exact path='/create-product' component={CreateProduct}/>
                      <Route exact path='/update-product/:id' component={UpdateProduct}/>
                 </Switch>
           </Router>
        </Fragment>
    );
};
export default App;
