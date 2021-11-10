import React from 'react';
import './App.css';
import ParentCard from './components/ParenCard';


function App() {                     //  <App />  3) Like AppComponent.js
  return (
    <div className="App">
         
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand">React Component Intaraction</a>
         </nav>   
       
             <ParentCard></ParentCard>
    </div>
  );
}

export default App;

