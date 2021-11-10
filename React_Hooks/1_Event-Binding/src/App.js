import React from 'react';
import './App.css';
import CounterClass from "./components/CounterClass";
import Counter from "./components/Counter";
import WishMessage from "./components/WishMessage";
import ProductItem from "./components/ProductItem";
import ChangeUsername from './components/ChangeUsername';

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
               {/* <h2>Class Base Example</h2>
              <CounterClass></CounterClass>

              <h2>Functinal Base Examples</h2>
                    <Counter></Counter>
                   
                   <WishMessage></WishMessage>
                
                <ProductItem></ProductItem> */}

                        <ChangeUsername></ChangeUsername>
            </div>
        );
    }

}
export default App;
