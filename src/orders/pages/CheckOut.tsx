import React from "react";
import Layout from "../../Shared/Layout";

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
                <h2>Your Cart</h2>
              </div>
              <hr />
              <div
                className="row"
                style={{ marginBottom: "5%", paddingTop: "30px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckOut;
