import {BUY_PIZZA} from "./pizzaActionTypes";

const buyPizza = () => {
    return{
    type : BUY_PIZZA,
    payload : 'Purchace a Pizza'
   }
};

export {buyPizza};