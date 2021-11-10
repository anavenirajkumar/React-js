import React from 'react';
import './App.css';
import Register from "./components/useRef/Register";
import AcceptTerms from "./components/useRef/AcceptTerms";
import MessageOne from "./components/useReducer/MessageOne";
import MessageTwo from "./components/useReducer/MessageTwo";
import MessageThree from "./components/useReducer/MessageThree";
import MessageFour from "./components/useReducer/MessageFour";
import MessageFive from "./components/useReducer/MessageFive";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks useRef() , useReducer()</a>
            </nav>

          {/*  <Register/>*/}
         {/* <AcceptTerms/>*/}

         <MessageOne/>
         <MessageTwo/>
         <MessageThree/>
         <MessageFour/>
         <MessageFive/>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
