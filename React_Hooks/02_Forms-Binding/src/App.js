import React from 'react';
import './App.css';
import ChangeSelectBox from './components/ChangeSelectBox';
import ChangeUsername from './components/ChangeUserName';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ShowPassword from './components/ShowPassword';
import SMSApp from './components/SMSApp';


                  

function App() {                     //  <App />  3) Like AppComponent.js
  return (
    <div className="App">
         
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand">React With Forms Binding</a>
         </nav>   
                   <h2>Forms Binding </h2>
                <ChangeUsername></ChangeUsername>

                <ShowPassword></ShowPassword>

                <ChangeSelectBox></ChangeSelectBox>

                <SMSApp></SMSApp>

                <LoginForm></LoginForm>

                <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;

