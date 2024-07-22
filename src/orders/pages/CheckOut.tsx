import React from "react";
import Layout from "../../Shared/Layout";
import CartItem from "../components/CartItem.tsx";
import OrderItem from "../components/OrderItem.jsx";

const CheckOut = () => {
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
                <h2>Check Out</h2>
              </div>
              <hr />
              <div
                className="row"
                style={{ marginBottom: "5%", paddingTop: "30px" }}
              >
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Customer Details</h4>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="row" style={{ marginBottom: "1%" }}>
                          Phinehas Newman
                        </div>
                        <div className="row" style={{ marginBottom: "1%" }}>
                          0546240226
                        </div>
                        <div className="row" style={{ marginBottom: "1%" }}>
                          Gk-0386-3224
                        </div>
                        <div className="row" style={{ marginBottom: "1%" }}>
                          Ashaiman - Zenu
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ marginTop: "4%", width: "90%" }} />
                  <div className="row">
                    <div className="col-md-4">
                      <button type="button" id="create_sub">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3"
                  style={{
                    minHeight: "360px",
                    backgroundColor: "#eee",
                    borderRadius: "8px",
                    paddingLeft: "20px",
                  }}
                >
                  <div style={{ marginTop: "30px" }}>
                    {" "}
                    <b>ORDER SUMMARY</b>
                  </div>
                  <hr style={{ width: "94%" }} />
                  <div className="row">
                    {/*Insert Order Items Here..........................................................................*/}
                    <OrderItem />
                    <OrderItem />
                  </div>
                  <hr style={{ width: "94%" }} />
                  <div className="row" style={{ marginTop: "10px" }}>
                    {" "}
                    <div className="col-md-4">
                      <span style={{ fontWeight: "700" }}>Sub-Total: </span>
                    </div>
                    <div
                      className="col-md-7"
                      style={{ textAlign: "right", padding: "0" }}
                    >
                      ₵ 40.00
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "10px" }}>
                    {" "}
                    <div className="col-md-4">
                      <span style={{ fontWeight: "700" }}>Delivery: </span>
                    </div>
                    <div
                      className="col-md-7"
                      style={{
                        textAlign: "right",
                        fontSize: "12pt",
                        padding: "0",
                      }}
                    >
                      ₵ 0.00
                    </div>
                  </div>

                  <hr style={{ width: "94%" }} />

                  <div
                    className="row"
                    style={{ fontWeight: "700", marginBottom: "5%" }}
                  >
                    <div className="col-md-4">TOTAL</div>
                    <div
                      className="col-md-7"
                      style={{ textAlign: "right", padding: "0" }}
                    >
                      GH₵ 40.00
                    </div>
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

export default CheckOut;
