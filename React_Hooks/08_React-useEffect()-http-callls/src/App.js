import React, {Fragment, useState} from 'react';
import './App.css';
import DigitalWatch from './components/DigitalWatch';
import UserList from './components/UserList';


let App = () => {
  
    return(
        <Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with LifeCycle & useEffect()</a>
           </nav>

             <DigitalWatch></DigitalWatch>

             <UserList></UserList>
        
        </Fragment>
    );
};
export default App;
