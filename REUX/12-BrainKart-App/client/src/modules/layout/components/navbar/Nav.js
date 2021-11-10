import React from "react"
import {Link} from "react-router-dom";
import brandImage from "../../../../assets/img/brand.PNG";
import { useSelector , useDispatch } from "react-redux";
import {useHistory } from "react-router-dom";
import {USER_FEATURE_KEY} from "../../../../redux/users/users.reducers";
import {logOut} from "../../../../redux/users/users.actions";
import { ORDER_FEATURE_KEY } from "../../../../redux/orders/orders.reducer";
let Nav = () => {

    let dispatch = useDispatch(); /////////////
    let history = useHistory();  //////////////

    let userInfo = useSelector((state) => {
        return state[USER_FEATURE_KEY];
    });
  
    let {isAuthenticated , loading , user} = userInfo;

    // logOutUser
    let logOutUser = () => {
         dispatch(logOut(history));     ///////////////
    };

    //////////////////// Cart Item Info And Badge ////////////////////////////////
    let cartInfo = useSelector((state) => {
         return state [ORDER_FEATURE_KEY];
    });
    let {cartItems} = cartInfo;   /////////// cartItems is [] -> Look in Reducer
  ///////////////////////// Cart Item Info And Badge End /////////////////////////

    let beforeLinks = (
        <React.Fragment>
            <li className="nav-item">
                <Link to='/users/login' className="nav-link">Login</Link>
            </li>

            <li className="nav-item">
                <Link to='/users/register' className="nav-link">Register</Link>
            </li>

            {/* <li><Link to="/users/login" className="nav-link">Login</Link></li>
            <li><Link to="/users/register" className="nav-link">Register</Link></li> */}


        </React.Fragment>
    );

    let afterLinks = (
        <React.Fragment>
            {
                user ? <li className="nav-item">
                    <Link to='/users/profile' className="nav-link">
                        <img src={user.avatar} alt="" width="20" height="20" className="rounded-circle"/>
                         &nbsp;{user.name}</Link>
                </li> : null
            }
            <li className="nav-item">
                <a href="/" onClick={logOutUser} className="nav-link">Logout</a>
            </li>
        </React.Fragment>
    );

     
    return(
     <React.Fragment>
           <div id="">
        <div className=""></div>
    </div>

<header className="header_area"  style={{backgroundColor: 'teal'}}>
  <div className="main_header_area animated">
    <div className="container">
      <nav id="navigation1" className="navigation">
        <div className="nav-header">
        <Link to="/" className="navbar-brand">
              <img src="https://www.laxmirice.com/wp-content/uploads/2018/10/logo-4.png" id="brandimage" height="50px"/></Link>
          <div className="nav-toggle"></div>
        </div>
        <div className="nav-search">
          <div className="nav-search-button">
            <i className="nav-search-icon"></i>
          </div>
          <form>
            <div className="nav-search-inner">
              <input type="text" name="search" placeholder="Search Products"/>
            </div>
          </form>
        </div>
        
        <div className="nav-search" style={{marginTop: '3px', marginRight: '-5px'}}>
        {/* style="margin-top: 3px;margin-right: -5px;" */}
          <div className=""> 
            {/* <a href="/"><i className="fas fa-cart-plus" style={{fontSize: '20px'}}></i>
            </a> */}
            <Link to="/orders/cart"  style={{fontSize: '20px'}}><i class="fas fa-cart-plus" id="cart"><span class="roundpoint" >{cartItems.length}</span></i>
              {/* <em id="cart_count"  class="roundpoint" >0</em><span
              class="hidetxt"></span> */}
            </Link>
           </div>
        </div>
        <div className="nav-menus-wrapper">

        <ul className="nav-menu pull-right" style={{float: 'right'}}>
                     {
                                !loading &&
                                <React.Fragment>
                                    {
                                        !isAuthenticated ? beforeLinks : afterLinks
                                    }
                                </React.Fragment>
                            }
                     </ul>
                     
          <ul className="nav-menu pull-right" style={{float: 'right'}}>   
            {/* <li><a href="index.html" >Home</a></li> */}
            <li><Link to="/products/men" className="nav-link">Village Rice Bags</Link></li>
            <li><Link to="/products/women" className="nav-link">Women's Wear</Link></li>
            <li><Link to="/products/kids" className="nav-link">Kids's Wear</Link> </li>
            {/* <li><Link to="/orders/order-success" className="nav-link">Orders</Link> </li> */}
            {
                user ? <li className="nav-item">
                    <Link to='/orders/order-success' className="nav-link">Orders</Link>
                </li> : null
            }

            <li>
            {
                                  user && user.isAdmin &&
                                  <Link to="/products/upload" className="nav-link">Upload</Link> 
                            }
            </li>
            <li>
            {
                                  user && user.isAdmin &&
                                  <Link to="/orders/list" className="nav-link">Orders List</Link> 
                            }
            </li>
            <li><Link to="/admin" className="nav-link">Admin</Link> </li>
            <li><Link to="/update-product" className="nav-link">Update</Link> </li>



        </ul>

                   
            {/* <li><a href="contact.html">Contact Us</a></li>
            <li><a href="login.html">Login/Register</a></li> */}
    
        </div>
      </nav>
    </div>
  </div>
</header>
     </React.Fragment>
    )
}
export default Nav;