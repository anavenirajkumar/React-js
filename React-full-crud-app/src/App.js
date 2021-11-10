import React, { useEffect } from "react";
import './App.css';
import NavBar from './components/Navbar';
import { Switch, Route } from "react-router-dom";
import CategoryCreate from "./components/category/CategoryCreate";
import CategoryUpdate from "./components/category/CategoryUpdate";
import SubCreate from "./components/sub/SubCreate";
import SubUpdate from "./components/sub/SubUpdate";
import ProductCreate from "./components/product/ProductCreate";
import AllProducts from "./components/product/AllProducts";
import ProductUpdate from "./components/product/ProductUpdate";

function App() {
  return (
    <div className="App">
         <NavBar/>
            <Switch>
                <Route exact path="/" component={CategoryCreate} />
                <Route exact path="/category/:slug" component={CategoryUpdate} />
                <Route exact path="/sub" component={SubCreate} />
                <Route exact path="/sub/:slug" component={SubUpdate} />
                <Route exact path="/product/" component={ProductCreate} />
                <Route exact path="/product/:slug" component={ProductUpdate} />
                <Route exact path="/products/" component={AllProducts} />
            </Switch>
    </div>
  );
}

export default App;
