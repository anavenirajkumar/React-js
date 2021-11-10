import React, { useEffect, useState } from "react";
import {useParams , useHistory} from "react-router-dom";
import {getProduct} from "../../../../redux/products/products.actions"
import {useDispatch, useSelector} from "react-redux";
import { PRODUCT_FEATURE_KEY } from "../../../../redux/products/products.reducer";
import Spinner from "../../../layout/components/spinner/Spinner";
import { addToCart } from "../../../../redux/orders/orders.actions";

let ProductDetails = () => {
    let dispatch = useDispatch();
    let productId = useParams().id; /////

    let history = useHistory();  //////////////////////////////
    let [productQty, setProductQty] = useState("")  ////////////////////////////
     ////////// Add To Cart
    let clickAddToCart = () => { /////////////////////////////////
        /// Dispatch an Action SelectedProduct , Qty , History
        dispatch(addToCart(selectedProduct , productQty , history)); ///////////////////////////////////
    };

    let productInfo = useSelector((state) => {
        return state[PRODUCT_FEATURE_KEY];
    });

    let {selectedProduct, loading} = productInfo;

    useEffect(() => {
        dispatch(getProduct(productId));
    }, [productId]);

    return(
        <React.Fragment>
            {/* <section className="p-3" style={{backgroundColor: 'rgb(155,183,212)'}}>
                <div className="container ">
                    <div className="row animated flipInY">
                        <div className="col">
                            <p className="h3">Product Details</p>
                        </div>
                    </div>
                </div>
            </section> */}
             {/* <div className="col">
                <pre>{JSON.stringify(selectedProduct)}</pre>
            </div> */}
            {/* <pre>{JSON.stringify(productQty)}</pre> */}
           {
               loading ? <Spinner/> :
               <React.Fragment>
                     {
                         Object.keys(selectedProduct).length > 0 ?
                         <React.Fragment>
                                <section className={"p-3 mt-4 "}>
                                   <div className="container">
                                       <div className="row">
                                       <div className="col-md-5 text-center">
                                           <img src={selectedProduct.image} alt="" className="img-fluid"/>
                                       </div>
                                       <div className="col-md-7">
                                          <p className="h3">{selectedProduct.name}</p>
                                          <p className="h4">Brand : {selectedProduct.brand}</p>
                                           <p className="h5 mt-2  mb-3">&#8377; {selectedProduct.price}</p>
                                                    <form className="form-inline">
                                                        <div className="form-group">
                                                            <select
                                                                value={productQty}
                                                                onChange={(e) => setProductQty(e.target.value)}
                                                                className="form-control">
                                                                <option value="">Select Qty</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                   </form>
                                                    <div>
                                                        {/* <button className="btn btn-brains text-dark btn-sm mt-2 ml-0" onClick={clickAddToCart}>Add to Cart</button> */}
                                                        <button type="button"  id="btn" onClick={clickAddToCart}>Add To Cart &nbsp; <i class="fas fa-cart-plus"></i> </button>

                                                    </div>
                                          <p>{selectedProduct.description}</p>
                                          <p>{selectedProduct.usage}</p>
                                       </div>
                                      </div>
                                   </div>
                               </section>
                        </React.Fragment> : null
                     }
                </React.Fragment>
           }
        </React.Fragment>
    );
};

export default ProductDetails;