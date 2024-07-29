import React, { useContext, useState } from "react";

import cities from "./Cities.js";
import Input from "../../Shared/components/FormElements/Input.js";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators.js";
import { useForm } from "../../Shared/hooks/form-hook.js";
import Button from "../../Shared/components/FormElements/Button.js";
import Header from "../../Shared/components/Header.jsx";
import { AuthContext } from "../../Shared/context/auth-context.js";
import ErrorModal from "../../Shared/components/UIElements/ErrorModal.js";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner.js";
import { useHttpClient } from "../../Shared/hooks/http-hook.js";
import axios from "axios";

const ClientRegister = () => {
  const currentYear = new Date().getFullYear();
  const auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm(
    {
      fName: {
        value: "",
        isValid: false,
      },
      lName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      mobileNumber: {
        value: "",
        isValid: false,
      },
      newPassword: {
        value: "",
        isValid: false,
      },
      birthday: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [showOptions, setShow] = useState(false);
  const [isArvState, setArvState] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  // const [isLoading, setIsLoading] = useState(false);

  const handleTestChange = () => {
    setShow(!showOptions);
  };

  const handleTestResult = (event) => {
    const result = event.target.value;
    if (result === "positive") {
      setArvState(true);
    } else {
      setArvState(false);
    }
  };

  const signUpSubmitHandler = async (event) => {
    event.preventDefault();

    let region = document.querySelector('input[name="region"]');
    let city = document.getElementById('input[name="city"]');

    try {
      // setIsLoading(true);
      const responseData = await sendRequest(
        "http://localhost:4000/api/users/signup",
        {
          method: "POST",
          body: {
            fName: formState.inputs.fName.value,
            lName: formState.inputs.lName.value,
            birthday: formState.inputs.birthday.value,
            email: formState.inputs.email.value,
            password: formState.inputs.newPassword.value,
            // region: region.value, //these inputs need checking............
            // city: city.value, //these inputs need checking...............
            deliveryAddress: formState.inputs.address.value,
            mobileNumber: formState.inputs.mobileNumber.value,
            stateArv: isArvState,
          },
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      auth.login(responseData.user.id);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  };

  return (
    <div>
      <Header />
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
                    Sign Up{" "}
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginLeft: "1%" }}>
                <form onSubmit={signUpSubmitHandler}>
                  <div className="row">
                    <div className="row">
                      <div className="col-md-6">
                        <Input
                          id="fName"
                          element="input"
                          type="text"
                          label="First Name"
                          validators={[VALIDATOR_REQUIRE()]}
                          errorText="Please enter a valid email"
                          onInput={inputHandler}
                        />
                      </div>
                      <div className="col-md-6">
                        <Input
                          id="lName"
                          element="input"
                          type="text"
                          label="Last Name"
                          validators={[VALIDATOR_REQUIRE()]}
                          errorText="Please enter a valid email"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "3%" }}>
                      <div className="col-md-6">
                        <Input
                          id="email"
                          element="input"
                          type="email"
                          label="Email Address"
                          validators={[VALIDATOR_EMAIL()]}
                          errorText="Please enter a valid email"
                          onInput={inputHandler}
                        />
                      </div>
                      <div className="col-md-6">
                        <Input
                          id="newPassword"
                          element="input"
                          type="password"
                          label="New Password"
                          validators={[VALIDATOR_MINLENGTH(5)]}
                          errorText="Password must be 6 characters or more"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-md-6"
                        id="email_add"
                        style={{ marginBottom: "20px" }}
                      >
                        <Input
                          id="birthday"
                          element="input"
                          type="date"
                          label="Date of Birth "
                          validators={[VALIDATOR_REQUIRE()]}
                          errorText="Field Can't be empty"
                          onInput={inputHandler}
                        />
                      </div>
                      <div className="col-md-6" id="email_add">
                        <Input
                          id="mobileNumber"
                          element="input"
                          type="tel"
                          label="Phone Number"
                          validators={[VALIDATOR_REQUIRE()]}
                          errorText="Field Can't be empty"
                          onInput={inputHandler}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <label htmlFor="">Region</label>
                          <div className="col-md-12">
                            <select
                              className="form-select mb-3"
                              style={{ width: "95%" }}
                              name="region"
                              id="region"
                              defaultValue="Greater Accra"
                            >
                              <option value="Greater Accra">
                                Greater Accra
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <label htmlFor=""> City/Town </label>
                          <div className="col-md-12">
                            <select
                              className="form-select mb-3"
                              name="city"
                              id="city"
                              style={{ width: "95%" }}
                            >
                              {cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <Input
                        id="address"
                        element="input"
                        type="text"
                        label="Delivery Address"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Field Can't be empty"
                        onInput={inputHandler}
                      />
                    </div>
                    <div className="row" style={{ marginTop: "3%" }}>
                      <h6 style={{ minHeight: "80px" }}>
                        The Next part of this form is optional because it deals
                        with sensitive information. Feel free to skip if with
                        your own discretion. Yet we <b>recommend</b> that you
                        fill that part also since it helps us tailor the kind of
                        content we give you on our app service.
                      </h6>
                    </div>
                    <div className="row" style={{ marginTop: "3%" }}>
                      <h6 style={{ height: "30px" }}>
                        Have you taken any of the following tests:
                      </h6>
                      <div className="col-md-6">
                        <label htmlFor="test">Test</label>
                        <div className="col-md-12">
                          <select
                            className="form-select mb-3"
                            onChange={handleTestChange}
                            style={{ width: "95%" }}
                            name="test"
                            id="test"
                          >
                            <option>Select a Med. Test</option>
                            <option value="hivTestTaken">H.I.V Test</option>
                          </select>
                        </div>
                      </div>
                      {showOptions && (
                        <div className="col-md-6">
                          <label htmlFor="test">Results</label>
                          <div className="col-md-12">
                            <select
                              className="form-select mb-3"
                              style={{ width: "95%" }}
                              onChange={handleTestResult}
                              name="test"
                              id="test"
                              defaultValue="negative"
                            >
                              <option>Select a Result</option>
                              <option value="negative">Negative</option>
                              <option value="positive">Positive</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="row" style={{ marginTop: "4%" }}>
                      <div
                        style={{
                          marginTop: "2px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          type="submit"
                          disabled={!formState.isValid || isLoading}
                        >
                          {isLoading ? (
                            <div>
                              <span
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Loading...
                            </div>
                          ) : (
                            <div>Create Account</div>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
                <br />

                <div className="row" style={{ marginTop: "4%" }}>
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
                          fillRule="evenodd"
                          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                        />
                        <path
                          fillRule="evenodd"
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

export default ClientRegister;
