import React from 'react';
import './App.css';
import WishMessage from "./components/WishMessage";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import ProductItem from "./components/ProductItem";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Redux - Events Binding</a>
            </nav>

           <Provider store={store}>
             <WishMessage/>
              <ProductItem/>
           </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
