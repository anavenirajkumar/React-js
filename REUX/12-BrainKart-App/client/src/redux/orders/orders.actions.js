import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, CLEAR_CART_ITEMS, DECREASE_PRODUCT_QTY, DELETE_PRODUCT_FROM_CART, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, INCREASE_PRODUCT_QTY, PLACE_ORDER_FAILURE, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, GET_ALL_ORDERS_FAILURE } from "../../redux/orders/orders.actionTypes";
import Axios from "axios"
import {setAlert} from "../layout/alert.actions";   /////////import


// Add to Cart
let addToCart = (selectedProduct , qty , history) => {
    return async (dispatch) => {
        try {
            dispatch({type: ADD_TO_CART_REQUEST});
            let theProduct = { 
                ...selectedProduct,
                qty : (qty === '') ? 1 : Number(qty)    //////////////////
            };
            dispatch({type: ADD_TO_CART_SUCCESS, payload : theProduct});
            history.push('/orders/cart'); ///////////
        }
        catch (error){
            dispatch({type: ADD_TO_CART_FAILURE, payload : error});
        }
    };
};

// Increase Product Quantity
let IncreaseProductQty = (productId) => {
    return async (dispatch) => {
        try {
            dispatch({type : INCREASE_PRODUCT_QTY , payload : {productId : productId}});
        }
        catch (error) {
            console.log(error);
        }
    };
};

// Decrease Product Quantity
let DecreaseProductQty = (productId) => {
    return async (dispatch) => {
        try {
            dispatch({type : DECREASE_PRODUCT_QTY , payload : {productId : productId}});
        }
        catch (error) {
            console.log(error);
        }
    };
};


// DELETE Product FROM CART PAGE
let DeleteProduct = (productId) => {
    return async (dispatch) => {
        try {
            dispatch({type : DELETE_PRODUCT_FROM_CART , payload : {productId : productId}});
        }
        catch (error) {
            console.log(error);
        }
    };
};

//////////// Place an Order  ///////////////
let PlaceOrder = (order, history) => {  
    return async (dispatch) => {
         try {
             let config = {
                 headers : {             
                     'Content-Type' : 'application/json'
                 }
             };
             dispatch({type : PLACE_ORDER_REQUEST});
             let response = await Axios.post(`/order/`, JSON.stringify(order), config);  
             dispatch({ type : PLACE_ORDER_SUCCESS , payload : response.data}); 
             dispatch(clearCartItems()); //////////////// Cart Items Empty After Order Page is Successsfull ////////////////////////////////////////////////////////////////////////////////////////////////
             history.push('/orders/order-success'); ///////////////////////////////////////////////
         }
         catch (error) {
              dispatch(setAlert(JSON.stringify(error)) , 'danger');
              dispatch({type : PLACE_ORDER_FAILURE , payload: error});
         }
    }
};

let clearCartItems = () => {
    return (dispatch) => {
        try {
            dispatch({type : CLEAR_CART_ITEMS});
        }
        catch (error) {
            console.log(error);
        }
    };
};

/////////// GET All Orders ////////////////////////////////
let getAllOrders = () => {  
    return async (dispatch) => {
         try {
             dispatch({type : GET_ALL_ORDERS_REQUEST});
             let response = await Axios.get(`/order/`);  
             dispatch({ type : GET_ALL_ORDERS_SUCCESS , payload : response.data}); 
         }
         catch (error) {
              dispatch(setAlert(JSON.stringify(error)) , 'danger');
              dispatch({type : GET_ALL_ORDERS_FAILURE , payload: error});
         }
    }
};
export {addToCart , IncreaseProductQty, DecreaseProductQty, DeleteProduct , PlaceOrder , clearCartItems , getAllOrders};