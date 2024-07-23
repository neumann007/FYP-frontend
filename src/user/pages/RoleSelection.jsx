import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";
import Header from "../../Shared/components/Header";

const SignUpRoleSelect = () => {
  const currentYear = new Date().getFullYear();

  const [userRole, setUserRole] = useState("");

  const handleSelection = (event) => {
    let selectValue;
    selectValue = event.target.value;
    setUserRole(selectValue);
  };

  return (
    <div>
      <Header />
      <div class="col-md-12" id="faded_back">
        {/* <img
          src={bg}
          alt=""
          id="acc_image"
          style={{ minHeight: "100vh", position: "fixed" }}
        /> */}
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
              method=""
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
                Account Role{" "}
              </div>
              <div className="row">
                <p style={{ textAlign: "center" }}>
                  The information you provide below helps us setup the right
                  account exactly tailored for your needs. Please select a user
                  role to continue. <br />
                  <br />
                </p>
              </div>
              <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                name="role"
                onChange={handleSelection}
              >
                <option selected>Select A Role:</option>
                <option value="client">Client User</option>
                <option value="store">Distributor</option>
              </select>
              <div class="col-md-12" style={{ marginTop: "2%" }}>
                <div class="col-md-6" style={{ marginLeft: "25%" }}>
                  <div>
                    {" "}
                    <div class="d-grid gap-2 col-6 mx-auto">
                      <Link to={`/user/account/register/${userRole}`}>
                        <button
                          className="btn btn-primary"
                          type="button"
                          style={{ marginTop: "5px" }}
                        >
                          Continue
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="col-md-12">
                <div className="text-center p-t-136">
                  <a className="txt2" href="/user/account/signin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-box-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                      />
                    </svg>
                    {"  "}
                    Go Back To Log In
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="row" style={{ marginTop: "5%" }}>
            <hr id="whitened_hr" />
            <div id="copyright" style={{ textAlign: "center" }}>
              {" "}
              ©️ {currentYear} Dosh Pharmaceauticals. All rights served.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpRoleSelect;
