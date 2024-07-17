// import "./Register.css";
import Header from "../../Shared/Header";
// import Layout from "../../Shared/Layout";
// import bg from "../../Shared/images/WhatsApp Image 2024-06-25 at 17.42.05_d6384708.jpg";
// import bg from "../../pages/images/carosel 4.jpg";
import React from "react";

const AddProduct = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* <Header /> */}
      <div className="col-md-12" id="faded_back">
        <div
          className="container"
          style={{
            width: "680px",
            background: "#fff",
            borderRadius: "10px",
            paddingBottom: "40px",
            marginTop: "3%",
            // boxShadow: "0 0 8px #eee",
          }}
        >
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div
                    className="col-md-3 p-t-136 txt2"
                    style={{ marginTop: "4%" }}
                  >
                    <a
                      href="/user/account/register/roleSelect"
                      style={{ textDecoration: "none" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-left"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                      </svg>{" "}
                      Back
                    </a>
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      textAlign: "center",
                      fontSize: "28pt",
                      fontWeight: "600",
                      color: "#584f4f",
                      paddingTop: "20px",
                      paddingBottom: "30px",
                    }}
                  >
                    {" "}
                    New Product{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <form action="">
                  <div className="col-md-12" style={{ marginLeft: "10%" }}>
                    <div className="row">
                      <div className="col-md-5">
                        <label htmlFor="firstName">
                          {" "}
                          First Name{" "}
                          <span style={{ fontSize: "10pt", color: "red" }}>
                            *
                          </span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="firstName"
                          id="full_name"
                          placeholder="Kweku"
                        />
                      </div>
                      <div className="col-md-5">
                        <label htmlFor="lastNname">
                          {" "}
                          Last Name{" "}
                          <span style={{ fontSize: "10pt", color: "red" }}>
                            *
                          </span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="lastName"
                          id="full_name"
                          placeholder="Minta"
                        />
                      </div>
                    </div>
                    <div id="email_add">
                      <label htmlFor="email">
                        {" "}
                        Email Address{" "}
                        <span style={{ fontSize: "10pt", color: "red" }}>
                          *
                        </span>
                      </label>{" "}
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="signup_email"
                        placeholder="kwekuminta19@email.com"
                      />
                    </div>
                  </div>

                  <div className="col-md-12"></div>
                  <div className="col-md-12" style={{ marginLeft: "10%" }}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-5">
                            <div>
                              <label htmlFor="">
                                {" "}
                                Region{" "}
                                <span
                                  style={{ fontSize: "10pt", color: "red" }}
                                >
                                  *
                                </span>
                              </label>
                              <div className="col-md-12">
                                <select
                                  className="form-select form-select-lg mb-3"
                                  style={{ width: "80%" }}
                                  name="region"
                                >
                                  <option value="Greater Accra" selected>
                                    Greater Accra
                                  </option>
                                </select>
                              </div>
                              <br />
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div>
                              <label htmlFor="">
                                {" "}
                                City/Town{" "}
                                <span
                                  style={{ fontSize: "10pt", color: "red" }}
                                >
                                  *
                                </span>
                              </label>
                              <div className="col-md-12">
                                <select
                                  className="form-select form-select-lg mb-3"
                                  name="city"
                                  style={{ width: "95%" }}
                                ></select>
                              </div>
                              <br />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div>
                              <label htmlFor="address">
                                {" "}
                                Delivery Address{" "}
                                <span
                                  style={{ fontSize: "10pt", color: "red" }}
                                >
                                  *
                                </span>
                              </label>{" "}
                              <br />
                              <input
                                type="text"
                                name="address"
                                id="address_line1"
                                placeholder=""
                              />
                            </div>

                            <div className="row" style={{ marginTop: "20px" }}>
                              <div className="col-md-12">
                                <div>
                                  <label htmlFor="phone_number">
                                    {" "}
                                    Phone Number{" "}
                                    <span
                                      style={{ fontSize: "10pt", color: "red" }}
                                    >
                                      *
                                    </span>
                                  </label>{" "}
                                  <br />
                                  <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                              <div
                                className="col-md-12"
                                style={{ marginTop: "20px" }}
                              >
                                <div className="row">
                                  <div className="col-md-5">
                                    <label htmlFor="new_password">
                                      {" "}
                                      New Password{" "}
                                      <span
                                        style={{
                                          fontSize: "10pt",
                                          color: "red",
                                        }}
                                      >
                                        *
                                      </span>
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="password"
                                      name="new_password"
                                      id="new_password"
                                    />
                                  </div>

                                  <div className="col-md-5">
                                    <label htmlFor="confirm_new_password">
                                      {" "}
                                      Confirm New Password
                                      <span
                                        style={{
                                          fontSize: "10pt",
                                          color: "red",
                                        }}
                                      >
                                        *
                                      </span>
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="password"
                                      name="confirm_new_password"
                                      id="confirm_new_password"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <input
                                  type="submit"
                                  id="create_sub"
                                  value="Submit"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <br />
                <div className="col-md-12">
                  <div className="row" style={{ marginTop: "5%" }}>
                    <div className="text-center p-t-136">
                      <a
                        className="txt2"
                        href="/user/account/signin"
                        style={{
                          marginTop: "1%",
                          textAlign: "center",
                        }}
                      >
                        Click Here To Log In{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-in-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "6%" }}>
          <hr id="whitened_hr" />
          <div id="copyright" style={{ textAlign: "center" }}>
            {" "}
            ©️ {currentYear} Dosh Pharmaceauticals. All rights served.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
