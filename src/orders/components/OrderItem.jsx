import React from "react";

const OrderItem = () => {
  return (
    <div className="row" style={{marginTop: "5px", marginBottom: "5px"}}>
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
      <div className="col-md-6">
        <p>
          <span>1 </span>X Paracetamol
        </p>
      </div>
      <div
        className="col-md-3"
        style={{ textAlign: "right", fontSize: "10pt" }}
      >
        ₵40.00
      </div>
    </div>
  );
};

export default OrderItem;
