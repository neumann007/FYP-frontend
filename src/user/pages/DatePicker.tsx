import React from "react";

const DatePicker = () => {
  return (
    <div className="row" style={{ marginLeft: "10%" }}>
      <div id="email_add" style={{ marginBottom: "20px", paddingLeft: "0" }}>
        <label htmlFor="email">
          {" "}
          Date of Birth{" "}
          <span style={{ fontSize: "10pt", color: "red" }}>*</span>
        </label>{" "}
        <br />
        <input type="date" name="birthday" id="country" placeholder="" style={{width: "89%"}}/>
      </div>
    </div>
  );
};

export default DatePicker;
