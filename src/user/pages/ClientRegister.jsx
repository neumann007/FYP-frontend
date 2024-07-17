// import "./Register.css";
import Header from "../../Shared/Header";
// import Layout from "../../Shared/Layout";
// import bg from "../../Shared/images/WhatsApp Image 2024-06-25 at 17.42.05_d6384708.jpg";
import bg from "../../pages/images/carosel 4.jpg";
import React from "react";

const ClientRegister = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="col-md-12">
        <img
          src={bg}
          alt=""
          id="acc_image"
          style={{ minHeight: "900px", position: "fixed" }}
        />
        <Header />

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
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "28pt",
                    fontWeight: "600",
                    color: "#584f4f",
                    paddingTop: "20px",
                  }}
                >
                  {" "}
                  Sign Up{" "}
                </div>
              </div>

              <div className="col-md-12" style={{ marginLeft: "10%" }}>
                <form action="">
                  <div id="email_add">
                    <label htmlFor="email">
                      {" "}
                      Email Address{" "}
                      <span style={{ fontSize: "10pt", color: "red" }}>
                        required
                      </span>
                    </label>{" "}
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="signup_email"
                      placeholder="example@email.com"
                    />
                  </div>
                </form>
              </div>
              <div
                className="col-md-12"
                style={{ marginLeft: "10%", marginTop: "20px" }}
              >
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="new_password">
                      {" "}
                      New Password{" "}
                      <span style={{ fontSize: "10pt", color: "red" }}>*</span>
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
                      <span style={{ fontSize: "10pt", color: "red" }}>*</span>
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
            </div>

            <div className="col-md-12">
              <div
                style={{
                  textAlign: "center",
                  fontSize: "14pt",
                  fontWeight: "500",
                  color: "#4b4848",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Address{" "}
              </div>
            </div>
            <div className="col-md-12" style={{ marginLeft: "10%" }}>
              <div className="row">
                <form action="">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <div>
                          <label htmlFor="">
                            {" "}
                            Country{" "}
                            <span style={{ fontSize: "10pt", color: "red" }}>
                              required
                            </span>
                          </label>
                          <br />
                          <input
                            type="text"
                            list="countries"
                            id="country"
                            name="country"
                          />
                          <datalist id="countries">
                            <option value="Ghanna"></option>
                            <option value="togo"></option>
                            <option value="Nigeria"></option>
                            <option value="Benin"></option>
                            <option value="Burkina Faso"></option>
                          </datalist>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <label htmlFor="full_name">
                          {" "}
                          Full Name{" "}
                          <span style={{ fontSize: "10pt", color: "red" }}>
                            required
                          </span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="col-md-12">
                        <div id="email_add">
                          <label htmlFor="address_line1">
                            {" "}
                            Address Line 1{" "}
                            <span style={{ fontSize: "10pt", color: "red" }}>
                              *
                            </span>
                          </label>{" "}
                          <br />
                          <input
                            type="text"
                            name="address_line1"
                            id="address_line1"
                            placeholder=""
                          />
                        </div>

                        <div className="col-md-12">
                          <div id="email_add">
                            {/* <label htmlFor="address_line2"> Address Line 2 <span style={{fontSize: "10pt", color: "red"}}>*</span></label> <br />
                            <input type="text" name="address_line2" id="address_line2" placeholder="" /> */}
                          </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                          <div className="col-md-5">
                            <label htmlFor="company_name"> Company Name</label>{" "}
                            <br />
                            <input
                              type="text"
                              name="company_name"
                              id="company_name"
                              placeholder=""
                            />
                          </div>

                          <div className="col-md-5">
                            <label htmlFor="City">
                              {" "}
                              Suburb/City{" "}
                              <span style={{ fontSize: "10pt", color: "red" }}>
                                *
                              </span>
                            </label>{" "}
                            <br />
                            <input
                              type="text"
                              name="City"
                              id="City"
                              placeholder=""
                            />
                          </div>

                          <div
                            className="col-md-5"
                            style={{ marginTop: "20px" }}
                          >
                            <label htmlFor="state">
                              {" "}
                              State/Provinc{" "}
                              <span style={{ fontSize: "10pt", color: "red" }}>
                                *
                              </span>
                            </label>{" "}
                            <br />
                            <input
                              type="text"
                              name="state"
                              id="state"
                              placeholder=""
                            />
                          </div>

                          <div
                            className="col-md-5"
                            style={{ marginTop: "20px" }}
                          >
                            <label htmlFor="City">
                              {" "}
                              Zip/Postcode{" "}
                              <span style={{ fontSize: "10pt", color: "red" }}>
                                *
                              </span>
                            </label>{" "}
                            <br />
                            <input
                              type="text"
                              name="City"
                              id="City"
                              placeholder=""
                            />
                          </div>

                          <div className="col-md-12">
                            <div id="email_add">
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
                  <br />

                  <div className="col-md-12">
                    <div className="text-center p-t-136">
                      <a
                        className="txt2"
                        href="/user/account/signin"
                        style={{ marginLeft: "-20%", marginTop: "10px" }}
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "5%" }}>
        <hr />
        <div id="copyright" style={{ textAlign: "center" }}>
          {" "}
          ©️ {currentYear} Dosh Pharmaceauticals. All rights served.
        </div>
      </div>
    </div>
  );
};

export default ClientRegister;
