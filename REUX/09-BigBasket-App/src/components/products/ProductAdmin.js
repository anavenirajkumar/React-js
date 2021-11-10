import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, fetchAllProducts} from "../../redux/bigBasket/bigBasket.actions";
import {BIG_BASKET_FEATURE_KEY} from "../../redux/bigBasket/bigBasket.reducer";
import Spinner from "../spinner/Spinner";

let ProductAdmin = () => {
    let dispatch = useDispatch();

    // fetch product info from the REDUX Store
    let productInfo = useSelector((state) => {
        return state[BIG_BASKET_FEATURE_KEY];
    });

    // dispatch an action to fetch all product from server & add to REDUX store
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);



    // delete Product
    let clickDeleteProduct = (productId) => {
       dispatch(deleteProduct(productId));
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-success">Products Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt officiis perspiciatis quam voluptate. Alias consequuntur est ipsam iure modi mollitia placeat, ut voluptatem? Dolorem doloribus illo nihil odit veniam.</p>
                        <Link to="/create-product" className="btn btn-success btn-sm">Create Product</Link>
                    </div>
                </div>
                {
                    productInfo.loading ? <Spinner/> :
                        <React.Fragment>
                            <div className="row mt-3 animated zoomIn">
                                <div className="col">
                                    <table className="table table-hover text-center table-striped table-success">
                                        <thead className="bg-dark text-white">
                                        <tr>
                                            <th>SNO</th>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            productInfo.products.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        productInfo.products.map((product) => {
                                                            return (
                                                                <tr key={product._id}>
                                                                    <td>{product._id.substr(product._id.length - 4)}</td>
                                                                    <td>
                                                                        <img src={product.image} alt="" width="70" height="70"/>
                                                                    </td>
                                                                    <td>{product.name}</td>
                                                                    <td>&#8377;{product.price.toFixed(2)}</td>
                                                                    <td>{product.qty} Kgs</td>
                                                                    <td>
                                                                        <Link to={`/update-product/${product._id}`} className="btn btn-secondary btn-sm text-white">Update</Link>
                                                                        <button onClick={clickDeleteProduct.bind(this, product._id)} className="btn btn-danger btn-sm text-white">Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment> : <React.Fragment>
                                                    <tr>
                                                        <td colSpan="6" className="text-danger font-weight-bold">------------- No Products Available ------------ </td>
                                                    </tr>
                                                </React.Fragment>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
};
export default ProductAdmin;
