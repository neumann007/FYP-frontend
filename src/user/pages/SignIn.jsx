import "./SignIn.css";
import { useForm } from "../../Shared/hooks/form-hook";
import Header from "../../Shared/components/Header";
import Input from "../../Shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import Button from "../../Shared/components/FormElements/Button";
import { useContext } from "react";
import { AuthContext } from "../../Shared/context/auth-context";

const SignIn = () => {
  const currentYear = new Date().getFullYear();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const auth = useContext(AuthContext);

  const signInSubmitHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
    auth.login();
  };

  return (
    <div>
      <Header />
      <div class="col-md-12" id="faded_back">
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
            <div id="account_container">
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
              <div className="row">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                  name="role"
                  style={{ width: "95%", marginLeft: "2%", marginTop: "1%" }}
                >
                  <option selected>Select A Role:</option>
                  <option value="client">Client User</option>
                  <option value="store">Distributor</option>
                </select>
              </div>

              <form onSubmit={signInSubmitHandler}>
                <div id="email_input">
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

                <div id="password_input" style={{ marginTop: "3%" }}>
                  <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Password must be 6 characters or more"
                    onInput={inputHandler}
                  />
                </div>

                <div className="row" style={{ marginTop: "2%" }}>
                  <div
                    style={{
                      marginTop: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button type="submit" disabled={!formState.isValid}>
                      Log In
                    </Button>
                  </div>
                </div>
              </form>
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
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "1%" }}></div>
        <hr id="whitened_hr" />
        <div id="copyright" style={{ textAlign: "center" }}>
          {" "}
          ©️ {currentYear} Dosh Pharmaceauticals. All rights served.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
