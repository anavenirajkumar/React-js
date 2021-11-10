import React, {Fragment, useState} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

                                  
                    // Client Card to App.js  App.js to Server Card
                     // Server Card to App.js  App.js to Client Card

let App = () => {
    
    let [userInfo, setUserInfo] = useState({
              author : 'ANAVENI RAJKUMAR',
              channel : 'EnterTechTelugu'
    })

    return(
        <Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks Props Drilling & Context-API</a>
           </nav>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-dark text-white">
                                   <small>{JSON.stringify(userInfo)}</small>
                                  <p className="h4">App Component</p>
                                  <ComponentA userInfo={userInfo}></ComponentA>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default App;
