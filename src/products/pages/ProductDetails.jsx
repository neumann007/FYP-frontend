import React, { useState } from "react";
import Layout from "../../Shared/Layout";
import { redirect, useParams } from "react-router-dom";
import drugs from "../drugs";

import del_icon from "../images/icons8-delivery-24.png";
import rollb_icon from "../images/icons8-rollback-24.png";
import ProductCard from "../components/ProductCard";

const ProductsDetails = () => {
  //Picking up product id from the URL
  const pid = useParams().pid;
  const productId = pid;
  const selectedProduct = drugs.find((drug) => drug.id === productId);
  console.log(selectedProduct);

  //Button text Color switching issue .... Very unnecessary for just a text color but who knows .........
  const btnTextBlue = { color: "#080561", textDecoration: "none" };
  const btnTextWhite = { color: "white", textDecoration: "none" };

  //For text Color switching for Add to Cart Button ............
  const [isHover, setHoverState] = useState(false);

  const handleHoverMse = () => {
    setHoverState(true);
  };

  const handleMseOut = () => {
    setHoverState(false);
  };

  //For text Color switching for Order Now Button .................................
  const [isHoverOrder, setHoverOrder] = useState(false);

  const handleHoverOrderMse = () => {
    setHoverOrder(true);
  };

  const handleHoverOrderMseOut = () => {
    setHoverOrder(false);
  };

  //Controlling the Quantity to be added to the cart ...............................
  const [qtn, setQtn] = useState(1);
  const handleInc = () => {
    setQtn(qtn + 1);
  };

  const handleDec = () => {
    if (qtn > 1) {
      setQtn(qtn - 1);
    }
  };

  //To handle clicking actions for the order now button .........................
  const handleCheckOut = () => {
    redirect("/order/checkout");
  };

  return (
    <Layout>
      <div className="col-md-12" id="faded_back">
        <div
          className="container"
          style={{
            background: "white",
            zIndex: "2",
            marginTop: "5px",
            marginBottom: "5%",
            borderRadius: "7px",
          }}
        >
          <div className="row" id="marginated">
            <div className="col-md-5" style={{ marginLeft: "10%" }}>
              <div className="row">
                <div
                  className="col-11"
                  style={{
                    border: "1px solid #eee",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={selectedProduct?.imageUrl}
                    alt="product_image"
                    style={{ height: "500px", marginBottom: "1%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "5%" }}>
              <div className="col-md-12">
                <div className="row">
                  <h6 style={{ minHeight: "25px" }}>
                    <span>{selectedProduct?.brand}</span>
                  </h6>
                </div>
                <div id="detail_name"> {selectedProduct?.name}</div>
                {/* <br /> */}
                <div
                  style={{
                    fontSize: "17pt",
                    fontWeight: "500",
                    marginTop: "5px",
                  }}
                >
                  {" "}
                  $ {selectedProduct?.price}{" "}
                </div>
              </div>

              <div
                className="col-md-12"
                style={{
                  height: "460px",
                  backgroundColor: "#eee",
                  borderRadius: "8px",
                  paddingLeft: "20px",
                }}
              >
                <div style={{ marginTop: "30px" }}>
                  {" "}
                  <b> SKU:</b>1800929
                </div>
                <hr style={{ width: "90%" }} />
                <div>
                  {" "}
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-boxes"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                    </svg>
                  </span>{" "}
                  <b>In Stock:</b> usually ships in 1 Bussiness Day.
                </div>
                <div style={{ marginTop: "10px" }}>
                  {" "}
                  <span style={{ fontWeight: "700" }}> Current Stock: </span>
                  {selectedProduct?.stock}
                </div>
                <br />
                <div className="row">
                  <div className="row">
                    <div style={{ fontWeight: "700" }}> Quantity :</div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="row"
                      id="quantity_space"
                      style={{ marginLeft: "1%" }}
                    >
                      <div
                        id="numD"
                        className="col-md-4"
                        style={{ paddingRight: "0", paddingLeft: "0" }}
                      >
                        <button id="inc" onClick={handleInc}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      <div className="col-md-3" id="num">
                        <h5
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "40px",
                            marginTop: ".15rem",
                          }}
                        >
                          {qtn}
                        </h5>
                      </div>{" "}
                      <div
                        id="numD"
                        className="col-md-4"
                        style={{ paddingRight: "0", paddingLeft: "0" }}
                      >
                        <button id="dec" onClick={handleDec}>
                          {" "}
                          -{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-md-5">
                    <button
                      id="cart"
                      name="add_cart"
                      onMouseOver={handleHoverMse}
                      onMouseOut={handleMseOut}
                      onMouseDown={handleMseOut}
                    >
                      {" "}
                      <span
                        style={isHover ? btnTextBlue : btnTextWhite}
                        id="add_to_cart"
                      >
                        {" "}
                        Add to Cart{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart-check-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </button>
                  </div>
                  <div className="col-md-5">
                    <button
                      id="cart"
                      name="order_now"
                      onMouseOver={handleHoverOrderMse}
                      onMouseOut={handleHoverOrderMseOut}
                      onMouseDown={handleHoverOrderMseOut}
                      onClick={handleCheckOut}
                    >
                      {" "}
                      <span
                        id="add_to_cart"
                        style={isHoverOrder ? btnTextBlue : btnTextWhite}
                      >
                        {" "}
                        Order Now{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-bag-check-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                            />
                          </svg>
                        </span>{" "}
                      </span>{" "}
                    </button>
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  {" "}
                  <img src={rollb_icon} alt="" />{" "}
                  <span>
                    60-Day No-Hassle Returns. <span> Find Out More </span>
                  </span>
                </div>
                <div>
                  {" "}
                  <img src={del_icon} alt="" /> <span> Free Shipping</span>
                </div>
                <hr style={{ width: "90%" }} />
              </div>
              <br />
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <h3 style={{ height: "50px" }}>Product Description</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h5 style={{ minHeight: "30px" }}>
                    {selectedProduct?.description}
                  </h5>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            background: "white",
            zIndex: "2",
            marginTop: "5px",
            marginBottom: "5%",
            borderRadius: "7px",
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h3 style={{ height: "50px" }}>Related Products</h3>
                </div>
              </div>
              <div className="row">
                {drugs
                  .filter((d) => {
                    return (
                      selectedProduct.category === d.category &&
                      d.id !== selectedProduct.id
                    );
                  })
                  .map((drug) => (
                    <ProductCard
                      title={drug.name}
                      img={drug.imageUrl}
                      key={drug.id}
                      price={drug.price}
                      id={drug.id}
                      mfg={drug.brand}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
