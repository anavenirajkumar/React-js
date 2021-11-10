import React, {Fragment, useState} from 'react';
import './App.css';
import ComponentA from "./components/ComponentA";
import {UserContext} from "./context/UserContext";
import {AppContext} from "./context/AppContext";

let App = () => {
    let [userInfo , setUserInfo] = useState({
        author : 'NAVEEN SAGGAM',
        channel : 'UiBrains Technologies'
    });

    let [appInfo , setAppInfo] = useState({
        appName : 'React Hooks',
        version : '16.13.1'
    });

    return(
        <Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with Props Drilling & Context API</a>
           </nav>

           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <div className="card">
                           <div className="card-body bg-dark text-white">
                               <p className="h4">App Component</p>
                               <small>{JSON.stringify(userInfo)}</small><br/>
                               <small>{JSON.stringify(appInfo)}</small>

                               <UserContext.Provider value={userInfo}>      
                                       <AppContext.Provider value={appInfo}>
                                               <ComponentA/>
                                      </AppContext.Provider>
                               </UserContext.Provider>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

        </Fragment>
    );
};
export default App;
