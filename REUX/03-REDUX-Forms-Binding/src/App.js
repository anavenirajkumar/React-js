import React from 'react';
import './App.css';
import Registration from "./components/Registration";
import {Provider} from "react-redux";
import {store} from "./redux/store";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Redux - Forms Binding</a>
            </nav>

            <Provider store={store}>  
                <Registration/>
            </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
