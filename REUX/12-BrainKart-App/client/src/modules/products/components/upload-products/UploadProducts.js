import React, { useState } from "react";
import {useHistory} from "react-router-dom"; ////
import {useDispatch} from "react-redux";   ////
import { uploadProduct } from "../../../../redux/products/products.actions";

let UploadProducts = () => {
  
  let dispatch = useDispatch(); ////
  let history = useHistory(); //// Redirect Page

  let [product, setProduct] = useState({
      name: '',
      brand : '',
      image : '',
      price : '',
      qty : '',
      category : '',
      description : '',
      usage : ''
  });

  /// handle Input
  let handleInput = (e) => {
      setProduct({
        ...product,
        [e.target.name] : e.target.value
      });
  };

  // Change Image
  let changeImage = async (event) => {
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener('load', () => {
       if(reader.result){
         setProduct({
           ...product,
           image : reader.result
         });
       }
       else {
         alert('Error Occured');
       }
    });
  };

  /// Submit Upload
  let submitUploadProduct = (e) => {
    e.preventDefault();
    // console.log(product);
    dispatch(uploadProduct(product , history));   ////--> products.actions.js
  }
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(product)}</pre> */}
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">Upload Products</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-3 animated zoomInLeft">
        <div className="card">
          <div className="card-header bg-dark text-brains">
            <p className="h4">Upload Here</p>
          </div>
          <div className="card-body bg-brains">
            <form onSubmit={submitUploadProduct}>
              <div className="form-group">
                <input
                  name="name"
                  value={product.name}
                  onChange={handleInput}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    onChange={changeImage}
                    required
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                  {
                     product.image ?
                     <img src={product.image} alt="" width="20" height="20"/> : 'Product Image'
                  }
                  </label>
                 
                </div>
              </div>
              <div className="form-group">
                <input
                  name="brand"
                  value={product.brand}
                  onChange={handleInput}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Product Brand"
                />
              </div>
              <div className="form-group">
                <input
                  name="price"
                  value={product.price}
                  onChange={handleInput}
                  required
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                />
              </div>
              <div className="form-group">
                <input
                   name="qty"
                   value={product.qty}
                   onChange={handleInput}
                  required
                  type="number"
                  className="form-control"
                  placeholder="Product Qty"
                />
              </div>
              <div className="form-group">
                <select
                 name="category"
                 value={product.category}
                 onChange={handleInput}
                required className="form-control">
                  <option value="">Select Category</option>
                  <option value="MEN">Men's Collection</option>
                  <option value="WOMEN">Women's Collection</option>
                  <option value="KIDS">Kid's Collection</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  value={product.description}
                   onChange={handleInput}
                  required
                  rows="4"
                  className="form-control"
                  placeholder="Product Description"
                />
              </div>
              <div className="form-group">
                <textarea
                   name="usage"
                   value={product.usage}
                    onChange={handleInput}
                  required
                  rows="4"
                  className="form-control"
                  placeholder="Product Usage"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-dark text-brains btn-sm"
                  value="Upload"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadProducts;
