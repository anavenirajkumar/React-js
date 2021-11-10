import React, { Fragment, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import pizza from "../assets/img/pizza.jpg";
import {buyPizza} from "../redux/pizzaHut/pizzaActions";

let PizzaHut = () => {
 
    let dispatch = useDispatch();

     // Get data from the Redux Store
    let pizzaState = useSelector((state) => {
       return state.pizza;
    });
    
    // dispatching an action from component to the store
    let clickBuyPizza = () => {
        dispatch(buyPizza());
    };

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="text-danger h3">PizzaHut</p>
                        <p className="lead">PizzaHut Application Developing by Rajkumar</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={pizza} alt="" className="img-fluid img-thumbnail"></img>
                    </div>
                    <div className="col-md-8">
                        <p className="h4">Availble :
    <span className="font-weight-bold text-danger">{pizzaState.count}</span>
                        </p>
                        <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Buy Pizza</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};
export default PizzaHut;