import React, { Fragment } from "react";
let Footer = () => {
    return(
      
<React.Fragment>
<footer className="footer mt-4 p-4">
  <div className="container">
       <div className="row">
              <div className="col-md-4 f-img">
                     <a href="https://www.facebook.com/anavenirajkumarprince"><h4>About Us</h4></a>
                     <img src="https://www.laxmirice.com/wp-content/uploads/2018/10/best-quality-banner.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-4">
                    <h4>Contact US</h4>
                    <p><i className="fas fa-map-marker-alt"></i> &nbsp; Karimnagar</p>
                    <p><i className="fas fa-phone-volume"></i> &nbsp; +91 8328369027</p>
               <p><i className="fas fa-envelope"></i> &nbsp; anaveni.rajkumar1@gmail.com</p>
              </div>
              <div className="col-md-4">
                  <h4>Quick Links</h4>
                  <ul className="list-unstyled">
                     <li><a href="/">Home</a></li>
                     <li><a href="/about">About Us</a></li>
                     <li><a href="/about">Contact Us</a></li>   
                 </ul>
              </div>
       </div>
  </div>
</footer>


<div className="copyright" style={{backgroundColor:'teal', padding: '16px 0px 0px 0px'}}>
  <div className="container">
    <div className="row" style={{color: 'white'}}>
     <div className="col-md-5" style={{float: 'left'}}>
         <p>&copy; 2021 Village Farmer All Rights Reserved.
         </p>
         </div>
         <div className="col-md-2">

         </div>
         <div className="col-md-5 f-desig">
             <p>Designed & Developed <a href="https://www.facebook.com/anavenirajkumarprince" target="_blank" style={{color: 'yellow', fontFamily: 'cursive'}}> Anaveni Rajkumar</a></p>
          </div>
      </div>
    </div>
</div>
</React.Fragment>
            )
}
export default Footer;