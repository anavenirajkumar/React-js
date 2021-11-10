import React from 'react';
import './App.css';
import PizzaHut from './components/PizzaHut';
import {Provider} from "react-redux";
import {store} from "./redux/Store";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React REDUX - PizzaHut</a>
            </nav>
      
           <Provider store={store}>
                <PizzaHut></PizzaHut>
           </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
