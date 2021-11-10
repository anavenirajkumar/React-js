import {UPLOAD_PRODUCT_REQUEST,
    UPLOAD_PRODUCT_SUCCESS,
    UPLOAD_PRODUCT_FAILURE,
    MEN_PRODUCT_REQUEST,
    MEN_PRODUCT_SUCCESS,
    MEN_PRODUCT_FAILURE,
    KIDS_PRODUCT_REQUEST,
    KIDS_PRODUCT_SUCCESS,
    KIDS_PRODUCT_FAILURE,
    WOMEN_PRODUCT_REQUEST,
    WOMEN_PRODUCT_SUCCESS,
    WOMEN_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    STRIPE_PAYMENT_REQUEST,
    STRIPE_PAYMENT_SUCCESS,
    STRIPE_PAYMENT_FAILURE,
    UPDATE_PRODUCT_FORM,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    FETCH_ALL_PRODUCTS_FAILURE,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_ALL_PRODUCTS_REQUEST,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE

 } from "./products.actionTypes";
 import Axios from 'axios';
 import {setAlert} from "../layout/alert.actions";///////////////////////
 import {PlaceOrder} from "../../../src/redux/orders/orders.actions";///////////////////
 import { setAuthToken} from "../../util/setAuthToken.js"; ///////////////////////


// upload a product
let uploadProduct = (product , history) => {    ////-->UploadProduct.js 
    return async (dispatch) => {
         try {
             let config = {
                 headers : {              /////
                     'Content-Type' : 'application/json'
                 }
             };
             dispatch({type : UPLOAD_PRODUCT_REQUEST});
             let response = await Axios.post(`/product/upload`, JSON.stringify(product), config);  
             dispatch({ type : UPLOAD_PRODUCT_SUCCESS , payload : response.data});
             history.push('/');  //// upload successfully redirect to homepage
         }
         catch (error) {
              dispatch({type : UPLOAD_PRODUCT_FAILURE , payload: error});
         }
    }
};

 //// Get MEN'S Collection
 let getMensCollection = () => {
     return async (dispatch) => {
         try {
            dispatch({type : MEN_PRODUCT_REQUEST});
            let response = await Axios.get('/product/men');
            dispatch({type : MEN_PRODUCT_SUCCESS, payload : response.data});
         }
         catch (error) {
            dispatch({ type : MEN_PRODUCT_FAILURE, payload : error});
         }
     }
 }
 ///// Get KID'S Collection
 let getKidsCollection = () => {
    return async (dispatch) => {
        try {
           dispatch({type : KIDS_PRODUCT_REQUEST});
           let response = await Axios.get('/product/kids');
           dispatch({type : KIDS_PRODUCT_SUCCESS, payload : response.data});
        }
        catch (error) {
           dispatch({ type : KIDS_PRODUCT_FAILURE, payload : error});
        }
    }
}
///// Get WOMEN'S Collection
let getWomensCollection = () => {
    return async (dispatch) => {
        try {
           dispatch({type : WOMEN_PRODUCT_REQUEST});
           let response = await Axios.get('/product/women');
           dispatch({type : WOMEN_PRODUCT_SUCCESS, payload : response.data});
        }
        catch (error) {
           dispatch({ type : WOMEN_PRODUCT_FAILURE, payload : error});
        }
    }
}

///////////////////////////// Get Single Product
// let getProduct = (productId) => {    ///////// productId    
//     return async (dispatch) => {
//         try {
//            dispatch({type : GET_PRODUCT_REQUEST});
//            let response = await Axios.get(`/products/${productId}`);  ///////////////// Dynamic ID    not products -> product
//            dispatch({type : GET_PRODUCT_SUCCESS, payload : response.data});
//         }
//         catch (error) {
//            dispatch({ type : GET_PRODUCT_FAILURE, payload : error});
//         }
//     }
// }

// get single Product
let getProduct = (productId) => { /////// productId
    return async (dispatch) => {
        try{
            dispatch({type : GET_PRODUCT_REQUEST});
            let response = await Axios.get(`/product/${productId}`);   ///////////////// Dynamic ID
            dispatch({type : GET_PRODUCT_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({ type : GET_PRODUCT_FAILURE , payload : error});
        }
    };
};



//////////// STRIPE PAYMENTS ///////////////
let makeStripePayment = (body , history , order) => {  
    return async (dispatch) => {
         try {
              
             if(localStorage.token){     //////////////////////////////////////////
                 setAuthToken(localStorage.getItem('token'));
             }
             let config = {
                 headers : {             
                     'Content-Type' : 'application/json'
                 }
             };
             dispatch({type : STRIPE_PAYMENT_REQUEST});
             let response = await Axios.post(`/payment/pay`, JSON.stringify(body), config);  
             dispatch({ type : STRIPE_PAYMENT_SUCCESS , payload : response.data});
             dispatch(PlaceOrder(order , history)) ///////////////////////////
            //  history.push('/');  
         }
         catch (error) {
              dispatch(setAlert(JSON.stringify(error)) , 'dander');
              dispatch({type : STRIPE_PAYMENT_FAILURE , payload: error});
         }
    }
};




// ------------------------------------- Task -------------------------------------------

// update product Form
let updateProductForm = (key , value) => {
    return (dispatch) => {
        dispatch({type : UPDATE_PRODUCT_FORM , payload : { key , value} });
    };
};


// FETCH all products
let fetchAllProducts = () => {
    return (dispatch) => {
        dispatch({ type : FETCH_ALL_PRODUCTS_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products`;
        Axios.get(dataURL).then((response) => {
            dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS , payload : response.data });
        }).catch((error) => {
            dispatch({ type: FETCH_ALL_PRODUCTS_FAILURE , payload : error });
        });
    };
};

// updateProduct
let updateProduct = (productId, selectedProduct, history) => {
    return (dispatch) => {
        dispatch({ type : UPDATE_PRODUCT_REQUEST });
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.put(dataURL, selectedProduct).then((response) => {
            dispatch({ type : UPDATE_PRODUCT_SUCCESS , payload : response.data});
            history.push('/admin');
        }).catch((error) => {
            dispatch({ type : UPDATE_PRODUCT_FAILURE , payload : error});
        });
    };
};

// fetch a single product
let fetchProduct = (productId) => {
    return (dispatch) => {
        dispatch({ type : FETCH_PRODUCT_REQUEST });
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.get(dataURL).then((response) => {
            dispatch({ type : FETCH_PRODUCT_SUCCESS , payload : response.data});
        }).catch((error) => {
            dispatch({ type : FETCH_PRODUCT_FAILURE , payload : error});
        });
    };
};
export {uploadProduct, getMensCollection, getKidsCollection, getWomensCollection, getProduct , makeStripePayment, updateProductForm , updateProduct , fetchAllProducts, fetchProduct}