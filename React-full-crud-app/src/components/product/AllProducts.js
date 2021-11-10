import React, { useEffect, useState } from "react";
import { getProductsByCount } from "../../functions/product";
import { removeProduct } from "../../functions/product";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Card } from "antd";
import laptop from "../../assets/tomatos.jpg";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import AdminProductCard from "../../components/product/AdminProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeProduct(slug)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-2">
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>All Products</h4>
          )}
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4 pb-3">
                {/* <AdminProductCard product={product} handleRemove={handleRemove} /> Props Component */}
                
                    <div className="col-md-12 text-center">
                          <img
                            src={product.images && product.images.length ? product.images[0].url : laptop}
                            style={{ height: "150px", objectFit: "cover" }}
                            className="p-1"
                          />

                      <div className="row text-center">
                            <div className="col-md-6">
                            <Link to={`/product/${product.slug}`}><EditOutlined className="text-warning" /></Link>
                            </div>
                            <div className="col-md-6">
                            <DeleteOutlined
                            onClick={() => handleRemove(product.slug)}
                            className="text-danger"
                          />
                            </div>
                        </div>
                        <h6 className="mt-4">{`${product.title}`}</h6>
                      <p style={{marginBottom: "50px"}}>{`${product.description && product.description.substring(0, 40)}...`}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
