import './App.css';
import React, { useEffect } from "react";
import Navbar from "./modules/layout/components/navbar/Navbar";
import {BrowserRouter as Router, Route , Switch } from "react-router-dom"
import Home from "./modules/layout/components/home/Home";
import WomensCollection from "./modules/products/components/womens-collection/WomensCollection";
import KidsCollection from "./modules/products/components/kids-collection/KidsCollection";
import Cart from "./modules/orders/components/cart/Cart";
import Checkout from "./modules/orders/components/checkout/Checkout";
import OrderList from "./modules/orders/components/order-list/OrderList";
import MensCollection from './modules/products/components/mens-collection/MensCollection';
import UploadProducts from './modules/products/components/upload-products/UploadProducts';
import Profile from "./modules/users/components/profile/Profile";
import Login from "./modules/users/components/login/Login";
import Register from "./modules/users/components/register/Register";
import ProductDetails from './modules/products/components/product-details/ProductDetails'; //////
import Alert from './modules/layout/components/alert/Alert';
import { getUserInfo } from "../src/redux/users/users.actions";
import { store } from "./redux/store";
import PrivateRoute from './router/PrivateRoute';
import OrderSuccess from './modules/orders/components/order-success/OrderSuccess';
import Nav from './modules/layout/components/navbar/Nav';
import { getAllOrders, PlaceOrder } from "../src/redux/orders/orders.actions";
import Footer from './modules/layout/components/footer/Footer';
import Admin from './modules/layout/components/home/Admin';
import UpdateProduct from './modules/layout/components/home/Admin';




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
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/products/men" component={MensCollection}></Route>
                <Route exact path="/products/women" component={WomensCollection}></Route>
                <Route exact path="/products/kids" component={KidsCollection}></Route>
                <PrivateRoute exact path="/products/upload" component={UploadProducts}></PrivateRoute>
                <Route exact path="/orders/cart" component={Cart}></Route>
                <PrivateRoute exact path="/orders/checkout" component={Checkout}></PrivateRoute>
                <Route exact path="/orders/list" component={OrderList}></Route>
                <PrivateRoute exact path="/orders/order-success" component={OrderSuccess}></PrivateRoute>
                <Route exact path="/users/profile"component={Profile}></Route>
                <Route exact path="/users/login" component={Login}></Route>
                <Route exact path="/users/register" component={Register}></Route>
                <Route exact path="/products/:id" component={ProductDetails}></Route> 
                <Route exact path="/admin" component={Admin}></Route>
                <Route exact path='/update-product/:id' component={UpdateProduct}/>

                 
            </Switch>

            <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
