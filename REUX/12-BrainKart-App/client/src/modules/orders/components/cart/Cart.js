import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_FEATURE_KEY } from "../../../../redux/orders/orders.reducer";
import { DecreaseProductQty, IncreaseProductQty, DeleteProduct } from "../../../../redux/orders/orders.actions"; //////////////////////////////////////
import Spinner from "../../../layout/components/spinner/Spinner";
let Cart = () => {
  
   let cartInfo = useSelector((state) => {
         return state[ORDER_FEATURE_KEY];
   });
   useEffect(()=> {
 
   }, []);

   let dispatch = useDispatch();     ////////////////////////////////////////

   let {cartItems , loading } = cartInfo;
    
   /////// Calculate Total
   let calculateTotal = () => {
     let result = 0;
     if(cartItems.length > 0) {
        for(let item of cartItems){
          result += item.price * item.qty;
        }
     }
     return result;
   };
      //////// Calculate Tax
   const PRODUCT_TAX = 5.0;

   let calculateTax = () => {     
     return calculateTotal() * PRODUCT_TAX / 100;
   }

      //////// Calculate GrandTotal
   let calculateGrandTotal = () => {
     return calculateTotal() + calculateTax();
   }
   /////// Increase Product Quantity
   let IncreaseQuantity = (productId) => {       /////////////////////////////////////////
      //  alert(productId);
      dispatch(IncreaseProductQty(productId));
   }

   /////// Decrease Product Quantity
   let DecreaseQuantity = (productId) => {   ////////////////////////////////////////
    //  alert(productId)
    dispatch(DecreaseProductQty(productId));
   }

  /////// DELETE PRODUCT CART ITEM
   let DeleteProductItem = (productId) => {   ////////////////////////////////////////////////////////////////////////////////-> Last
    //  alert(productId)
    dispatch(DeleteProduct(productId));
   }
 
  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-shopping-cart" /> Your Cart Items
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <pre>{JSON.stringify(cartItems)}</pre> */}

      {
         loading ? <Spinner/> : 
            <React.Fragment>
                    {
                         cartItems.length > 0 ?
                         <React.Fragment>
                              <div className="cart-box-main" style={{marginTop: '40px'}}>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="table-main table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                        <th>Product</th>
                        <th>NAME</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
						
                            </tr>
                        </thead>
                        <tbody>
                        {
                       cartItems.map((cartItem) => {
                         return(
                          <tr key={cartItem._id}>
                          <td>
                            <img src={cartItem.image} alt="" width="50" height="80"/>
                          </td>
                          <td>{cartItem.name}</td>
                          <td> <i className="fa fa-minus-circle mx-1" onClick={DecreaseQuantity.bind(this , cartItem._id)}/>{cartItem.qty}<i className="fa fa-plus-circle mx-1" onClick={IncreaseQuantity.bind(this , cartItem._id)} />
                          </td>
                          <td>&#8377; {cartItem.price.toFixed(2)}</td>
                          <td>&#8377; {cartItem.qty * cartItem.price.toFixed(2)}</td>
                          <td>
                            <button className="btn btn-danger btn-sm" onClick={DeleteProductItem.bind(this, cartItem._id)}> Delete</button></td>
                        </tr>
                         )
                       })
                     }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-4 animated zoomInRight">
              <div className="card" style={{color: 'white'}}>
                <div className="card-header" style={{backgroundColor: 'teal'}}>
                  <p className="h4">Your Total</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item bg-brains">
                      Total : &#8377; {calculateTotal().toFixed(2)}
                    </li>
                    <li className="list-group-item bg-brains">
                      Tax : &#8377; {calculateTax().toFixed(2)}
                    </li>
                    <li className="list-group-item bg-brains">
                      Grand Total : &#8377; {calculateGrandTotal().toFixed(2)} 
                    </li>
                  </ul>
                  <Link
                    to="/orders/checkout"
                    className="btn btn-success btn-sm mt-3">Checkout
                  </Link>
                  <Link to="/" className="btn btn-secondary btn-sm mt-3">Shop Again</Link>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>




      
                          </React.Fragment>  : 

                          <React.Fragment>
                               <section className="mt-4">
                                      <div className="container text-center">
                                          <div className="row">
                                              <div className="col">
                                                <p className="h5 text-brains">Your Cart is Empty</p>
                                                <Link to="/" className="btn btn-dark text-brains btn-sm mt-4 mb-4">Shop Now</Link>
                                              </div>
                                          </div>
                                      </div>
                               </section>
                          </React.Fragment>
                    }
            </React.Fragment> 
      }
    

      {/* <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="h3 text-brains">
                ----------- Your Cart is Empty ------------{" "}
              </p>
              <Link to="/" className="btn btn-dark text-brains btn-sm">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export default Cart;
