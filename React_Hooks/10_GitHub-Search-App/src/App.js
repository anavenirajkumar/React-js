import React from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";

let App = () => {

    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with Github Profile Search</a>
           </nav>

            <GithubSearchApp/>
        </React.Fragment>
    );
};
export default App;
