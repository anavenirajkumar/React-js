import React from "react";
import { Card } from "antd";
import laptop from "../../assets/tomatos.jpg";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {
  // destructure
  const { title, description, images, slug } = product;

  return (
 <div className="container">
  <div className="col-md-12 text-center">
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />

    <div className="row text-center">
           <div className="col-md-6">
           <Link to={`/product/${slug}`}><EditOutlined className="text-warning" /></Link>
           </div>
           <div className="col-md-6">
           <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />
           </div>
       </div>
       <h6 className="mt-4">{`${title}`}</h6>
     <p style={{marginBottom: "50px"}}>{`${description && description.substring(0, 40)}...`}</p>
</div>
</div>
  );
};

export default AdminProductCard;
