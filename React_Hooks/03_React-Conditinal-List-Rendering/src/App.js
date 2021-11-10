import React from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import EmployeeList from './components/EmployeeList';
import HobbySelector from './components/HobbySelector';
import HobbySelectorRadio from './components/HobbySelectorRadio';
import User from './components/User';



                  

function App() {                     //  <App />  3) Like AppComponent.js
  return (
    <div className="App">
         
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand">React Conditional List Rendering</a>
         </nav>   
                <User></User>

             <HobbySelector></HobbySelector>

             <HobbySelectorRadio></HobbySelectorRadio>

             <EmployeeList></EmployeeList>

             <CustomerList></CustomerList>
    </div>
  );
}

export default App;

