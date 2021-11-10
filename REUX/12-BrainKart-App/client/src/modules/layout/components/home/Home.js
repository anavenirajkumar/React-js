import React from "react";
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import c1 from "../../../../assets/img/products/c1.png";
import c2 from "../../../../assets/img/products/c2.png";
import c3 from "../../../../assets/img/products/c3.jpg";
import r1 from "../../../../assets/img/1.jpg";
import r3 from "../../../../assets/img/3.jpg";
import MensCollection from "../../../products/components/mens-collection/MensCollection";



let Home = () => {

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "tomato", marginLeft: "10px" }}
            onClick={onClick}
          />
        );
      }

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "tomato", marginRight: "15px" }}
            onClick={onClick}
          />
        );
      }

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 2000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
    
      ]
      };

      var oneImage = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 2000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
      };

    return (
        <React.Fragment>
            
            
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
          <div className="carousel-item active animated slideInDown">
              <img src={c1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item animated slideInUp">
              <img src={{c2}} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item animated jackInTheBox">
              <img src={c3} className="d-block w-100" alt="..."/>
          </div>
      
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <i className="fas fa-chevron-left fa-3x"  aria-hidden="true"></i>
          <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <i className="fas fa-chevron-right fa-3x"  aria-hidden="true"></i>
          <span class="sr-only">Next</span>
      </a>
  </div>
               <div className="container">
                   <div class="section-title">
                      <h4 className="title"  style={{fontWeight:"bold"}}>New Products</h4>
                      {/* <Link to="/products/men" className="" style={{float:"right", fontWeight:"bold"}}>See All</Link> */}
                   </div>
                </div>
  <MensCollection></MensCollection>

            
             <div className="container mt-4">
                 <div className="clearfix">
                   <div class="section-title">
                      <h4 className="title"  style={{fontWeight:"bold"}}> Best Sellers</h4>
                      {/* <Link to="/products/men" className="" style={{float:"right", fontWeight:"bold"}}>See All</Link> */}
                   </div>
                 </div>
             <Slider {...settings}>
             <div>
             <img src={r1} className="img-fluid item" alt=""/>
            </div>
            <div>
             <img src={r3}className="img-fluid item" alt=""/>
            </div> <div>
             <img src={r1} className="img-fluid item" alt=""/>
            </div> <div>
             <img src={r3} className="img-fluid item" alt=""/>
            </div> 
             <div>
               <img src={r1} className="img-fluid item" alt=""/>
             </div>
             <div>
               <img src={r3} className="img-fluid item" alt=""/>
             </div>
             </Slider>

             <Slider style={{marginTop:"50px"}}{...oneImage}>
             <div>
                <img src={c1} className="img-fluid item" alt=""/>
              </div>
              <div>
             <img src={c2} className="img-fluid item" alt=""/>  
             </div>
             <div>
             <img src={c3} className="img-fluid item" alt=""/>
             </div>
             <div>
             <img src={c1} className="img-fluid item" alt=""/>
             </div>
             <div>
             <img src={c2} className="img-fluid item" alt=""/>  
             </div>
             <div>
             <img src={c3} className="img-fluid item" alt=""/>
            </div>
             </Slider>
             </div>



             <div className="container mt-4">
    <div className="row">
          <div className="col-md-6 col-sm-6">
          <img src="https://wallpapercave.com/wp/wp3592344.jpg" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-sm-6">
              {/* <div className="row">
                    <div className="col-md-6 col-sm-6" > */}
              <img src="https://images7.alphacoders.com/382/thumb-1920-382535.jpg" className="img-fluid"/>
                    {/* </div> */}
                    {/* <div className="col-md-6 col-sm-6">
                         <img src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=6&m=488481490&s=612x612&w=0&h=J8lIVq-5pPU-ta0BRZPaHY3WVXf6nbSJqAW9E2J-qDs=" className="img-fluid"/>
                    </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                    <img src="https://cdn.hipwallpaper.com/i/90/55/cjNrVt.jpg" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-sm-6">
                     <img src="https://images7.alphacoders.com/382/thumb-1920-382535.jpg" className="img-fluid"/>
                </div> */}
          {/* </div> */}
          </div>
    </div>
</div>




















            {/* <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                        <h3 className="display-3 animated slideInDown">Welcome to BrainsKart</h3>
                        <p className="lead px-3 animated slideInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate deleniti dolorum eaque eius, eveniet explicabo impedit incidunt laudantium perspiciatis placeat quae, quod saepe sapiente sunt temporibus unde veniam vitae!</p>
                        <Link to="/products/men" className="btn btn-brains btn-sm animated zoomIn">Shop Now</Link>
                    </div>
                </div>
            </div> */}
            
        </React.Fragment>
    );
};
export default Home;
