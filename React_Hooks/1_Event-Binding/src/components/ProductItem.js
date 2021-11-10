import React, {useState} from "react";

let ProductItem = () => {
    let [product , setProduct] = useState({      // Object
        sno : 101,    
        image : 'https://www.slashgear.com/wp-content/uploads/2020/05/galaxy_watch_review_09-1280x720.jpg',
        name : 'Samsung Watch',
        qty : 2,
        price : 550
    });

    let incrQty = () => {
       setProduct({
           ...product,              // Spread Operator
           qty : product.qty + 1
       });
    };

    let decrQty = () => {
        setProduct({
            ...product,            // Spread Operator
            qty : product.qty - 1 > 0 ? product.qty - 1 : 1
        });
    };

    return(
        <React.Fragment>
                           {/* <pre>{JSON.stringify(product)}</pre> */}
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
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} alt="" width="25" height="25"/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i onClick={decrQty} className="fa fa-minus-circle mx-1"/>
                                        {product.qty}
                                        <i onClick={incrQty} className="fa fa-plus-circle mx-1"/>
                                    </td>
                                    <td>&#8377;{(product.qty * product.price).toFixed(2)}</td>
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
