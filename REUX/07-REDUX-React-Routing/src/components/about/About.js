import React from "react";

let About = () => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">About Us</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque consectetur labore magni nemo quibusdam, quis! Exercitationem laborum, laudantium maiores neque praesentium, quibusdam saepe sequi sint tempora, veritatis voluptates voluptatum? Ab deleniti dolorum incidunt ipsam itaque labore magni non, possimus.</p>
                        <p className="lead">Application Name :
                            <span className="font-weight-bold text-primary">React Router with Redux</span>
                        </p>
                        <p className="lead">Version :
                            <span className="font-weight-bold text-primary">1.0.1</span>
                        </p>
                        <p className="lead">Author :
                            <span className="font-weight-bold text-primary">NAVEEN SAGGAM</span>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default About;
