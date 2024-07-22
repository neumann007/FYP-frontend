import React, { useState } from "react";
import Layout from "../../Shared/Layout";

import del_icon from "../images/icons8-delivery-24.png";
import rollb_icon from "../images/icons8-rollback-24.png";
import CartItem from "../components/CartItem.tsx";
import { redirect } from "react-router-dom";

const CartPage = () => {
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

  const handleCheckOut = () => {
    redirect("/order/checkout")
  }

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
            <div
              className="container"
              style={{ marginTop: "2%", marginLeft: "5%" }}
            >
              <div className="row">
                <h2>Your Cart</h2>
              </div>
              <hr />
              <div
                className="row"
                style={{ marginBottom: "5%", paddingTop: "30px" }}
              >
                <div className="col-md-7">
                  <div className="row">
                    {/*Insert Cart Items Here..........................................................................*/}
                    <CartItem />
                    <CartItem />
                    <CartItem />
                  </div>
                </div>
                <div
                  className="col-md-3"
                  style={{
                    height: "360px",
                    backgroundColor: "#eee",
                    borderRadius: "8px",
                    paddingLeft: "20px",
                  }}
                >
                  <div style={{ marginTop: "30px" }}>
                    {" "}
                    <b>ORDER DETAILS</b>
                  </div>
                  <hr style={{ width: "91%" }} />
                  <div className="row" style={{ marginTop: "10px" }}>
                    {" "}
                    <div className="col-md-4">
                      <span style={{ fontWeight: "700" }}>Sub-Total: </span>
                    </div>
                    <div className="col-md-7" style={{ textAlign: "right" }}>
                      GHs 40.00
                    </div>
                  </div>
                  <hr style={{ width: "91%" }} />
                  <div className="row" style={{ fontWeight: "700" }}>
                    <div className="col-md-4">TOTAL</div>
                    <div className="col-md-7" style={{ textAlign: "right" }}>
                      GHs 40.00
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-md-11">
                      <button
                        id="cart"
                        onMouseOver={handleHoverMse}
                        onMouseOut={handleMseOut}
                        onMouseDown={handleMseOut}
                        onClick={handleCheckOut}
                        style={{height: "45px"}}
                      >
                        {" "}
                        <span
                          style={isHover ? btnTextBlue : btnTextWhite}
                          id="add_to_cart"
                        >
                          {" "}
                          Check out{" "}
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

                  <hr style={{ width: "91%" }} />

                  <div style={{ marginTop: "20px" }}>
                    {" "}
                    <img src={rollb_icon} alt="" />{" "}
                    <span>
                      60-Day No-Hassle Returns. <span> Find Out More </span>
                    </span>
                  </div>
                  <div style={{ marginBottom: "3%" }}>
                    {" "}
                    <img src={del_icon} alt="" /> <span> Free Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
