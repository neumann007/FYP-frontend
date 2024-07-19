import { Link } from "react-router-dom";
import "./Card.css";
// import productImage from "./WhatsApp Image 2024-06-27 at 15.09.29_671b63b3.jpg";
import React from "react";

const ProductCard = props => {
  return (
    <div className="col-md-3" style={{ marginTop: "3%" }}>
      <Link to={`/products/${props.id}/details`} style={{ textDecoration: "none" }}>
        <div className="card" id="card_card">
          <div className="card-img">
            <div id="pro_img_cover">
              <img id="cards_image" src={props.img} alt="product_image" />
            </div>
          </div>
          <div className="card-body" id="card_deets">
            <div className="card-title">
              <div id="item_name">
                {" "}
                {props.title} <br /> {props.mfg}
              </div>
            </div>
            <div className="card-price">
              <div>
                {" "}
                {props.price} <span id="slashed"></span>{" "}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
