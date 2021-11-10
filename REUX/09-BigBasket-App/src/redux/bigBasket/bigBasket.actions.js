import {
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    FETCH_ALL_PRODUCTS_REQUEST,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_FORM,
    UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS
} from "./bigBasket.actionTypes";
import Axios from "axios";

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

// Create a product
let createProduct = (product,history) => {
    return (dispatch) => {
        dispatch({ type : CREATE_PRODUCT_REQUEST });
        let dataURL = `http://127.0.0.1:5000/api/products/`;
        Axios.post(dataURL, product).then((response) => {
            dispatch({ type : CREATE_PRODUCT_SUCCESS , payload : response.data });
            history.push('/admin');
        }).catch((error) => {
            dispatch({ type : CREATE_PRODUCT_FAILURE , payload : error });
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

// update product Form
let updateProductForm = (key , value) => {
    return (dispatch) => {
        dispatch({type : UPDATE_PRODUCT_FORM , payload : { key , value} });
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

// deleteProduct
let deleteProduct = (productId) => {
    return (dispatch) => {
        dispatch({type : DELETE_PRODUCT_REQUEST});
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.delete(dataURL).then((response) => {
            dispatch({ type : DELETE_PRODUCT_SUCCESS , payload : response.data});
            dispatch(fetchAllProducts()); // fetch all product once delete is done
        }).catch((error) => {
            dispatch({ type : DELETE_PRODUCT_FAILURE , payload : error});
        });
    };
};

export {fetchAllProducts,
        createProduct,
        fetchProduct,
        updateProductForm,
        updateProduct,
        deleteProduct};
