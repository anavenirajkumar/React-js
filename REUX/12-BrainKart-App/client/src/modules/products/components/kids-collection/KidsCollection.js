import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKidsCollection } from "../../../../redux/products/products.actions";
import { PRODUCT_FEATURE_KEY } from "../../../../redux/products/products.reducer";
import Spinner from "../../../layout/components/spinner/Spinner";
import { Link, useHistory } from "react-router-dom"; ////////////////////////////////////////
import { addToCart } from "../../../../redux/orders/orders.actions"; //////////////////////////////

let KidsCollection = () => {
  ////
  let dispatch = useDispatch(); //////
  let history = useHistory(); ////////////////////////////////////// Direct Add To Cart

  ////// GET The Poducts from Redux Store
  let productInfo = useSelector((state) => {
    return state[PRODUCT_FEATURE_KEY];
  });

  let { products, loading } = productInfo; /////

  useEffect(() => {
    //// dispatch an actions to get Kid's collection when the page loads
    dispatch(getKidsCollection());
  }, [dispatch]); //// look in redux browser

  //////// Add to Cart    ////////////////////////////////////////////////////// Direct Add To Cart
  let clickAddToCart = (product) => {
    dispatch(addToCart(product, "1", history));
  };
  return (
    <React.Fragment>
      {/* <section className="p-3 "  style={{backgroundColor: 'rgb(155,183,212)'}}>
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">Kid's Collection</p>
            </div>
          </div>
        </div>
      </section> */}
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {products.length > 0 ? (
            <React.Fragment>
              <section className="mt-3">
                <div className="container">
                  <div className="row ">
                    {products.map((product) => {
                      return (
                        <div className="col-md-3 col-sm-6" key={product._id}>
                          <div className="product-grid4">
                            <div className="product-image4">
                              <Link to={`/products/${product._id}`}>
                                <img
                                  src={product.image}
                                  alt=""
                                  className="img-fluid pic-1"
                                />
                                <img
                                  src={product.image}
                                  alt=""
                                  className="img-fluid pic-2"
                                />
                              </Link>
                              <ul className="social">
                                <li>
                                  <a href="" data-tip="Quick View">
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" data-tip="Add to Wishlist">
                                    <i className="fa fa-shopping-bag"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" data-tip="add to cart">
                                    <i className="fa fa-shopping-cart"></i>
                                  </a>
                                </li>
                              </ul>
                              <span className="product-new-label">New</span>
                              <span className="product-discount-label">
                                -10%
                              </span>
                            </div>
                            <div className="product-content">
                              <h3 className="title">
                                <a href="productdetails.html">{product.name}</a>
                              </h3>
                              <div className="row">
                                {/* <div className="col-md-12 col-sm-12 col-lg-7">
                                  <form>
                                    <select>
                                      <option>Basmathi 1 Bag</option>
                                      <option>Basmathi 2 Bags</option>
                                    </select>
                                  </form>
                                </div> */}

                                <div className="col-md-12">
                                  <div className="price">
                                    {product.price.toFixed(2)}
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="add-to-cart"
                                href=""
                                onClick={clickAddToCart.bind(this, product)}
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default KidsCollection;
