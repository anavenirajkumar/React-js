import React, {Fragment, useState} from 'react';
import './App.css';
import ClientCard from "./components/ClientCard";
import ServerCard from "./components/ServerCard";
                                  
                    // Client Card to App.js  App.js to Server Card
                     // Server Card to App.js  App.js to Client Card

let App = () => {
    let [clientMessage , setClientMessage] = useState('');
    let [serverMessage , setServerMessage] = useState('');

    let receiveFromClient = (value) => {
        setClientMessage(value);
    };

    let receiveFromServer = (value) => {
        setServerMessage(value);
    };

    return(
        <Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with Component Interaction</a>
           </nav>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <ClientCard serverMessage={serverMessage} sendToApp={receiveFromClient}/>
                    </div>
                    <div className="col-md-2"/>
                    <div className="col-md-5">
                        <ServerCard clientMessage={clientMessage} sendToApp={receiveFromServer}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default App;
