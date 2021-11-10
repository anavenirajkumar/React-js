import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {productItemKey} from "../redux/productItem/product-item.reducer";
import {decrQty, incrQty} from "../redux/productItem/product-item.actions";

let ProductItem = () => {
    let dispatch = useDispatch();

    let productInfo = useSelector((state) => {
        return state[productItemKey];
    });

    let clickIncrQty = () => {
        dispatch(incrQty());
    };

    let clickDecrQty = () => {
        dispatch(decrQty());
    };

    return(
        <React.Fragment>

            {/* <pre>{JSON.stringify(productInfo)}</pre> */}
            
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-striped table-light text-center">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Product</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>QTY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{productInfo.sno}</td>
                                    <td>
                                        <img src={productInfo.image} alt="" width="25" height="25"/>
                                    </td>
                                    <td>{productInfo.name}</td>
                                    <td>{productInfo.price}</td>
                                    <td>
                                        <i onClick={clickDecrQty} className="fa fa-minus-circle mx-1"/>
                                        {productInfo.qty}
                                        <i onClick={clickIncrQty} className="fa fa-plus-circle mx-1"/>
                                    </td>
                                    <td>&#8377;{(productInfo.qty * productInfo.price).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ProductItem;
