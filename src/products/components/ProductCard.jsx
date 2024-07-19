import { Link } from "react-router-dom";
import "./Card.css";
// import productImage from "./WhatsApp Image 2024-06-27 at 15.09.29_671b63b3.jpg";
import React from "react";

const ProductCard = (props) => {
  return (
    <div className="col-md-3" style={{ marginTop: "3%" }}>
      <Link
        to={`/products/${props.id}/details`}
        style={{ textDecoration: "none" }}
      >
        <div className="card" id="card_card" style={{marginTop: "2%"}}>
          <div className="card-img">
            <div id="pro_img_cover">
              <img id="cards_image" src={props.img} alt="product_image" />
            </div>
          </div>
          <div className="card-body" id="card_deets">
            <div className="card-title">
              <div id="item_name">
                {" "}
                {props.title} <br />
              </div>
            </div>
            <div className="row">
              <h6 style={{ fontSize: "10pt" }}> {props.mfg}</h6>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-price">
                  <div>
                    GHs {props.price} <span id="slashed"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{display: "flex", justifyContent: "right"}}>
                <button id="pro_page_add" type="button" style={{ fontSize: "9pt", marginTop: "5%" }}>
                 {"    "}Buy Now{"    "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
