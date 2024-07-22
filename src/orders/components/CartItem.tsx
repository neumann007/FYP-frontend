import React, { useState } from "react";

const CartItem = () => {
  //Controlling the Quantity to be added to the cart
  const [qtn, setQtn] = useState(1);

  const handleInc = () => {
    setQtn(qtn + 1);
  };

  const handleDec = () => {
    if (qtn > 1) {
      setQtn(qtn - 1);
    }
  };

  return (
    <div>
      <div className="row">
        <div
          className="col-md-3"
          style={{
            border: "1px solid #eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtF-JKjYL2eaQQziSZrNSvfZDzV46OUA_Zw&s"
            alt=""
          />
        </div>
        <div className="col-md-8" style={{ marginLeft: "2%" }}>
          <div className="row">
            <h4>Paracetamol</h4>
          </div>
          <div className="row">
            <h5 style={{ height: "30px" }}>GHs 20.00</h5>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div style={{ fontWeight: "700" }}> Quantity :</div>
              </div>
              <div
                className="row"
                id="quantity_space"
                style={{ marginLeft: "1%" }}
              >
                {" "}
                <div
                  id="numD"
                  className="col-md-3"
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
            <div className="row">
              <div className="col-md-12" style={{ textAlign: "right" }}>
                <span style={{ fontWeight: "700" }}>Sub-Total: </span>
                GHs 40.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "4%", width: "90%" }} />
    </div>
  );
}

export default CartItem;