import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Switch>
         {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={AllUsers} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      

          </Switch>
    </div>
  );
}

export default App;
