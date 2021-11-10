import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProducts} from "../../redux/bigBasket/bigBasket.actions";
import {BIG_BASKET_FEATURE_KEY} from "../../redux/bigBasket/bigBasket.reducer";
import Spinner from "../spinner/Spinner";

let ProductList = () => {
    let dispatch = useDispatch();

    // fetch product info from the REDUX Store
    let productInfo = useSelector((state) => {
        return state[BIG_BASKET_FEATURE_KEY];
    });

    // dispatch an action to fetch all product from server & add to REDUX store
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-success">Products Page</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt officiis perspiciatis quam voluptate. Alias consequuntur est ipsam iure modi mollitia placeat, ut voluptatem? Dolorem doloribus illo nihil odit veniam.</p>
                    </div>
                </div>
                {
                    productInfo.loading ? <Spinner/> :
                        <React.Fragment>
                            <div className="row animated zoomIn">
                                {
                                    productInfo.products.length > 0 ?
                                        <React.Fragment>
                                            {
                                                productInfo.products.map((product) => {
                                                    return (
                                                        <div key={product._id} className="col-md-3">
                                                            <div className="card">
                                                                <div className="card-header text-center bg-white">
                                                                    <img src={product.image} alt="" width="150" height="150"/>
                                                                </div>
                                                                <div className="card-body">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item">
                                                                            Name : {product.name}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Price : &#8377; {product.price.toFixed(2)}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Qty : {product.qty} Kgs
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : <React.Fragment>
                                            <div>
                                                <p className="h5 text-danger">---------------- No Products Available --------------</p>
                                            </div>
                                        </React.Fragment>
                                }
                            </div>
                        </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
};
export default ProductList;
