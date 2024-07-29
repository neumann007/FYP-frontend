import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Input from "../../Shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import Button from "../../Shared/components/FormElements/Button";
import Header from "../../Shared/components/Header";
import { useForm } from "../../Shared/hooks/form-hook";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import ErrorModal from "../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../Shared/context/auth-context";

const UpdateProduct = () => {
  const auth = useContext(AuthContext);
  const currentYear = new Date().getFullYear();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProduct, setLoadedProduct] = useState();
  const navigate = useNavigate();

  const productId = useParams();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      brand: {
        value: "",
        isValid: false,
      },
      category: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      stock: {
        value: "",
        isValid: false,
      },
      imageUrl: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/products/${productId}`
        );
        setLoadedProduct(responseData.product);
        setFormData({
          title: {
            value: responseData.product.title,
            isValid: true,
          },
          brand: {
            value: responseData.product.brand,
            isValid: true,
          },
          category: {
            value: responseData.product.category,
            isValid: true,
          },
          description: {
            value: responseData.product.description,
            isValid: true,
          },
          price: {
            value: responseData.product.price,
            isValid: true,
          },
          stock: {
            value: responseData.product.stock,
            isValid: true,
          },
          imageUrl: {
            value: responseData.product.imageUrl,
            isValid: true,
          },
        });
      } catch (error) {}
    };
    fetchProduct();
  }, [sendRequest, productId, setFormData]);

  const productEditSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/products/${productId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          brand: formState.inputs.brand.value,
          category: formState.inputs.category.value,
          description: formState.inputs.description.value,
          price: formState.inputs.price.value,
          stock: formState.inputs.stock.value,
          imageUrl: formState.inputs.imageUrl.value,
          storeId: auth.userId,
        }),
        {
          "Content-type": "application/json",
        }
      );
      navigate("/products/store");
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && loadedProduct && (
          <div>
            <Header />
            <div className="col-md-12" id="faded_back">
              <div
                className="container"
                style={{
                  width: "980px",
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
                            href="/products/store"
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
                            fontSize: "25pt",
                            fontWeight: "600",
                            color: "#584f4f",
                            paddingTop: "20px",
                            paddingBottom: "30px",
                          }}
                        >
                          {" "}
                          Edit Product Details{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12" style={{ marginLeft: "3%" }}>
                        <form onSubmit={productEditSubmitHandler}>
                          <div className="row">
                            <Input
                              id="title"
                              element="input"
                              type="text"
                              label="Title / Name"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Enter Product Name"
                              onInput={inputHandler}
                              style={{ width: "95%" }}
                              initialValue={loadedProduct.product.title}
                              initialValid={true}
                            />
                          </div>
                          <div className="row" style={{ marginTop: "3%" }}>
                            <div className="col-md-6">
                              <Input
                                id="brand"
                                element="input"
                                type="text"
                                label="Brand"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Brand Name"
                                onInput={inputHandler}
                                style={{ width: "90%" }}
                                initialValue={loadedProduct.product.brand}
                                initialValid={true}
                              />
                            </div>
                            <div className="col-md-6">
                              <Input
                                id="category"
                                element="input"
                                type="text"
                                label="Category"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Enter a valid Category"
                                onInput={inputHandler}
                                style={{ width: "90%" }}
                                initialValue={loadedProduct.product.category}
                                initialValid={true}
                              />
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "3%" }}>
                            <Input
                              id="description"
                              type="text"
                              label="Description"
                              validators={[VALIDATOR_MINLENGTH(10)]}
                              errorText="Description should be more than 10 characters"
                              onInput={inputHandler}
                              style={{ width: "95%" }}
                              initialValue={loadedProduct.product.description}
                              initialValid={true}
                            />
                          </div>

                          <div className="row" style={{ marginTop: "3%" }}>
                            <div className="col-md-6">
                              <Input
                                id="price"
                                element="input"
                                type="text"
                                label="Price"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Product Price"
                                onInput={inputHandler}
                                style={{ width: "90%" }}
                                initialValue={loadedProduct.product.price}
                                initialValid={true}
                              />
                            </div>
                            <div className="col-md-6">
                              <Input
                                id="stock"
                                element="input"
                                type="text"
                                label="Stock"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Input Available Stock"
                                onInput={inputHandler}
                                style={{ width: "90%" }}
                                initialValue={loadedProduct.product.stock}
                                initialValid={true}
                              />
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "3%" }}>
                            <Input
                              id="imageUrl"
                              element="input"
                              type="text"
                              label="Image"
                              validators={[VALIDATOR_MINLENGTH(10)]}
                              errorText="Description should be more than 10 characters"
                              onInput={inputHandler}
                              style={{ width: "95%" }}
                              initialValue={loadedProduct.product.description}
                              initialValid={true}
                            />
                          </div>
                          <div className="row" style={{ marginTop: "3%" }}>
                            <div className="row form-control1">
                              <label>
                                Does the Product belong to the Anti-retroviral
                                group?
                              </label>
                            </div>
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="isARV"
                                id="inlineRadio1"
                                value="No"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                                style={{ paddingLeft: "5%" }}
                              >
                                NO
                              </label>
                            </div>
                            <div className=" col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="isARV"
                                id="inlineRadio2"
                                value="Yes"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                                style={{ paddingLeft: "5%" }}
                              >
                                YES
                              </label>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "5%" }}>
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
                                disabled={!formState.isValid}
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </form>
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
        )}
      </div>
    </React.Fragment>
  );
};

export default UpdateProduct;
