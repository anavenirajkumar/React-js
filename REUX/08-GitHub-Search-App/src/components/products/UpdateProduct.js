import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct, updateProduct, updateProductForm} from "../../redux/bigBasket/bigBasket.actions";
import {BIG_BASKET_FEATURE_KEY} from "../../redux/bigBasket/bigBasket.reducer";

let UpdateProduct = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [productId , setProductId] = useState(useParams().id);

    // get selected Product from REDUX Store
    let selectedProductInfo = useSelector((state) => {
        return state[BIG_BASKET_FEATURE_KEY];
    });

    let [submitted , setSubmitted] = useState(false);
    let [errorMessage , setErrorMessage] = useState('');

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [productId]);

    // changeInput
    let changeInput = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        dispatch(updateProductForm(key , value));
    };

    // changeImage
    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if(reader.result){
                let key = 'image';
                let value = reader.result;
                dispatch(updateProductForm(key , value));
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    // submitProduct
    let submitProduct = (event) => {
        event.preventDefault();
        dispatch(updateProduct(productId, selectedProductInfo.selectedProduct , history));
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-secondary">Update a Product</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus corporis cumque, debitis, delectus dignissimos distinctio expedita
                            facere fugiat harum id iure, minus neque nesciunt odit officia perferendis porro
                            tempora ullam.</p>
                    </div>
                </div>
                <div className="row animated flipInY delay-1s">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Update Product</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitProduct}>
                                    <div className="form-group">
                                        <input
                                            name="name"
                                            value={selectedProductInfo.selectedProduct.name}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-file">
                                            <input
                                                onChange={changeImage}
                                                type="file" className="custom-file-input" id="customFile"/>
                                            <label className="custom-file-label" htmlFor="customFile">Product
                                                Image</label>
                                            {
                                                selectedProductInfo.selectedProduct.image &&
                                                <img src={selectedProductInfo.selectedProduct.image} alt=""
                                                     width="20" height="20"/>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="price"
                                            value={selectedProductInfo.selectedProduct.price}
                                            onChange={changeInput}
                                            type="number" className="form-control" placeholder="Price"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="qty"
                                            value={selectedProductInfo.selectedProduct.qty}
                                            onChange={changeInput}
                                            type="number" className="form-control" placeholder="qty"/>
                                    </div>
                                    <div className="form-group">
                                           <textarea
                                               name="info"
                                               value={selectedProductInfo.selectedProduct.info}
                                               onChange={changeInput}
                                               className="form-control" rows="3" placeholder="General Info"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-secondary btn-sm"
                                               value="Update Product"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginBottom : '100px'}}/>
        </React.Fragment>
    )
};
export default UpdateProduct;
