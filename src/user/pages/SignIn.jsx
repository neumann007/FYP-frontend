import "./SignIn.css";
import bg from "../../pages/images/carosel 4.jpg";
// import Layout from "../../Shared/Layout";
import React from "react";
import Header from "../../Shared/Header";

const SignIn = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Header />
      <div class="col-md-12">
        <img
          src={bg}
          alt=""
          id="acc_image"
          style={{ minHeight: "100vh", position: "fixed" }}
        />
        <div class="row">
          <div
            class="col-md-6"
            style={{
              marginLeft: "35%",
              width: "600px",
              marginTop: "7%",
              minHeight: "700px",
              overflow: "visible",
            }}
          >
            <form
              id="account_container"
              action=""
              method="POST"
              style={{ marginLeft: "50px" }}
            >
              <div
                style={{
                  fontSize: "35pt",
                  fontWeight: "700",
                  color: "#2b2828",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                {" "}
                Sign In{" "}
              </div>

              <div id="email_input">
                <label for="email"> Email Address </label> <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <div id="password_input">
                <label for="password"> Password </label> <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                />
              </div>
              <div className="row">
                <div>
                  <label>Select User Role:</label>
                </div>
                <div
                  className="form-check form-check-inline col-md-4"
                  style={{ marginLeft: "15px" }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    style={{ marginLeft: "-10px" }}
                    checked
                  />
                  <label
                    className="form-check-label"
                    for="inlineRadio1"
                    style={{ marginLeft: "5px" }}
                  >
                    Client User
                  </label>
                </div>
                <div class="form-check form-check-inline col-md-6">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    style={{ marginLeft: "-10px" }}
                  />
                  <label
                    class="form-check-label"
                    for="inlineRadio2"
                    style={{ marginLeft: "5px" }}
                  >
                    Pharmacy / Distributor
                  </label>
                </div>
              </div>
              <div class="col-md-12" style={{ marginTop: "2%" }}>
                <div class="col-md-6" style={{ marginLeft: "25%" }}>
                  <div>
                    {" "}
                    <input type="submit" value="Sign In" id="input_submit" />
                  </div>
                </div>
              </div>
              <br />

              <div className="col-md-12">
                <div className="text-center p-t-136">
                  <a className="txt2" href="/user/account/register/roleSelect">
                    Click Here To Create An Account{" "}
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

export default SignIn;
