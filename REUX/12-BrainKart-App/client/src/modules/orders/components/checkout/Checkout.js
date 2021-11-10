import React from "react";
import { Link , useHistory } from "react-router-dom";
import { USER_FEATURE_KEY} from "../../../../redux/users/users.reducers";
import { ORDER_FEATURE_KEY} from "../../../../redux/orders/orders.reducer";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../layout/components/spinner/Spinner";
import StripeCheckout from "react-stripe-checkout"; ///////////////// Stripe Payments
import stripeImage from "../../../../assets/img/pay.png";
import { makeStripePayment } from "../../../../redux/products/products.actions";


let Checkout = () => {
   let history = useHistory();
   let dispatch = useDispatch();

  let userInfo = useSelector((state)=> {
    return state[USER_FEATURE_KEY];
  });

  let  {loading , user} = userInfo;

  let cartInfo = useSelector((state) => {
    return state [ORDER_FEATURE_KEY];
  });


    //////// Calculate Tax
    const PRODUCT_TAX = 5.0;

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

  let calculateTax = () => {     
    return calculateTotal() * PRODUCT_TAX / 100;
  }

     //////// Calculate GrandTotal
  let calculateGrandTotal = () => {
    return calculateTotal() + calculateTax();
  }


    // Submit of Stripe Payment Form
    let clickPayment = (token) => {
      let items = cartItems.map(cartItem => {//////////////////////////////Order.js
          return {
              name : cartItem.name ,
              price : cartItem.price,
              qty : cartItem.qty
          }
      });

      let order = { ///////////////////////////////////// Order.js
          items : items,
          tax : calculateTax(),
          total : calculateTotal()
      };
      let product = {
          price : Number(calculateGrandTotal()) * 100,
          name : 'Products from  BrainsKart'
      };
      let body = {
          token , product
      };
      dispatch(makeStripePayment(body , history, order));
  };



  let {cartItems} = cartInfo;
  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-check-circle"/> CheckOut Your Items
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 animated zoomInRight">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <span className="h4">Billing Address</span>
                  <Link
                    to="/users/profile"
                    className="btn btn-brains btn-sm float-right">
                    Update Address
                  </Link>
                </div>
                <div className="card-body">
                 {
                   loading ? <Spinner/> : 
                   <React.Fragment>
                        {
                           user !== null && user.address ?
                              <React.Fragment>
                                    <ul className="list-group">
                    <li className="list-group-item bg-brains">Flat : {user.address?.flat}</li>
                    <li className="list-group-item bg-brains">
                      Street : {user.address?.street}
                    </li>
                    <li className="list-group-item bg-brains">
                      Landmark :{user.address?.landmark}
                    </li>
                    <li className="list-group-item bg-brains">
                      City : {user.address?.city}
                    </li>
                    <li className="list-group-item bg-brains">
                      State :{user.address?.state}
                    </li>
                    <li className="list-group-item bg-brains">
                      Country : {user.address?.country}
                    </li>
                    <li className="list-group-item bg-brains">
                      PinCode : {user.address?.pin}
                    </li>
                    <li className="list-group-item bg-brains">
                      Mobile : {user.address?.mobile}
                    </li>
                  </ul>
                               </React.Fragment> : null
                        }
                   </React.Fragment>
                 }
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Payment Option</p>
                </div>
                <div className="card-body bg-light">
                  <form>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input" disabled/>
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio1">
                        Cash On Delivery
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input" checked/>
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio2" >Credit Card Payment (Stripe)
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 animated zoomInLeft">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Your Cart</p>
                </div>
                <div className="card-body bg-brains">
                  <ul className="list-group">
                   {
                     cartItems.length > 0 ?
                     <React.Fragment>
                           {
                             <React.Fragment>
                                {
                                  cartItems.map(cartItem => {
                                    return(
                                      <li key={cartItem._id} className="list-group-item">
                                      <div className="row text-center">
                                        <div className="col-md-2">
                                          <img src={cartItem.image} alt="" width="50" height="80" />
                                        </div>
                                        
                                        <div className="col-md-8">
                                          <p className="h6"> {cartItem.name}</p>
                                          <p className="h6"> {cartItem.qty}</p>
                                          <p className="h6"> &#8377; {cartItem.price?.toFixed(2)}</p>
                                        </div>
                                      </div>
                                    </li>
                                    );
                                  })
                                }
                             </React.Fragment>
                           }
                     </React.Fragment> : null
                   }
                  </ul>
                  <ul className="list-group mt-2">
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
                  {/* STRIPE PAYMENT CHECKOUT FORM */}
                        <StripeCheckout token={clickPayment}
                                                    stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
                                                    name="Stripe Payment"
                                                    amount={calculateGrandTotal() * 100}
                                                    description="Payments with Stripe"
                                                    currency="inr"
                                                    image={stripeImage}>
                               <button className="btn btn-secondary btn-sm btn-block mt-3">PAY &#8377; {calculateGrandTotal().toFixed(2)}</button>
                        </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIPE PAYMENT CHECKOUT FORM  */}
      {/* <StripeCheckout token={clickPayment}
                                                    stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
                                                    name="Stripe Payment"
                                                    amount={calcGrandTotal() * 100}
                                                    description="Payments with Stripe"
                                                    currency="inr"
                                                    image={stripeImage}>
                                        <button className="btn btn-secondary btn-sm btn-block mt-3">PAY &#8377; {calcGrandTotal().toFixed(2)}</button>
                                    </StripeCheckout> */}
    </React.Fragment>
  );
};

export default Checkout;
