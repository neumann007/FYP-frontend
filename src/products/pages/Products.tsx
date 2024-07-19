import "./Products.css";
import React from "react";
import Layout from "../../Shared/Layout";
import ProductCard from "../components/ProductCard";
import PriceSlider from "../components/PriceSlider";
import drugs from "../drugs";

const ProductsPage = () => {
  return (
    <Layout>
      <div className="col-md-12" id="faded_back">
        <div
          className="container"
          style={{ background: "white", zIndex: "2", marginBottom: "5%" }}
        >
          <div className="col-md-12" id="marginated">
            <div className="row">
              <div className="col-md-3" style={{ marginLeft: "40px" }}>
                <div className="row">
                  <div className="col-md-8" style={{ marginLeft: "18px" }}>
                    <h5 style={{ height: "35px" }}>Filters / Navigations</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div className="card shadow">
                      <div className="card-body">
                        <h3 className="h5 card-title">Product type</h3>
                        <ul className="list-group text-gray">
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
                            <a
                              href="#"
                              className="text-decoration-none"
                              id="cat_link"
                            >
                              Anti-biotics
                            </a>
                            <span className="badge bg-gray badge-pill">
                              123
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
                            <a
                              href="#"
                              className="text-decoration-none"
                              id="cat_link"
                            >
                              Pain Relief
                            </a>
                            <span className="badge bg-gray badge-pill">
                              330
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
                            <a
                              href="#"
                              className="text-decoration-none"
                              id="cat_link"
                            >
                              Supplements
                            </a>
                            <span className="badge bg-gray badge-pill">99</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
                            <a
                              href="#"
                              className="text-decoration-none"
                              id="cat_link"
                            >
                              Dewormer
                            </a>
                            <span className="badge bg-gray badge-pill">
                              210
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
                            <a
                              href="#"
                              className="text-decoration-none"
                              id="cat_link"
                            >
                              Vitamins
                            </a>
                            <span className="badge bg-gray badge-pill">
                              134
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "5px" }}>
                  <div className="col-10">
                    <div className="card shadow">
                      <div className="card-body">
                        <h3 className="h5 card-title">Brands</h3>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cartCheck6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cartCheck6"
                              >
                                Agbeve
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cartCheck7"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cartCheck7"
                              >
                                Lonart
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cartCheck8"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cartCheck8"
                              >
                                Kina-Pharma
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cartCheck9"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cartCheck9"
                              >
                                Wellness
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cartCheck10"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cartCheck10"
                              >
                                Medisoft
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{marginTop: "5px"}}>
                  <div className="col-10">
                    <div className="card shadow">
                      <div className="card-body">
                        <h3 className="h5 card-title">Price Range</h3>
                        <div className="row">
                          <div
                            className="col-md-11"
                            style={{ marginLeft: "12px" }}
                          >
                            <PriceSlider />
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="submit"
                                id="create_sub"
                                value="Filter"
                                style={{ marginLeft: "75px", marginTop: "15px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-4">
                    <h4>All Products</h4>
                  </div>
                  <div className="col-8" id="add-butt">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg "
                      style={{ display: "inline-block", float: "inline-end" }}
                    >
                      <a
                        href="/products/new"
                        style={{ textDecoration: "none" }}
                      >
                        Add Product{"  "}
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    {drugs.map(drug => (
                      <ProductCard title={drug.name} img={drug.imageUrl} key={drug.id} price={drug.price} id={drug.id} mfg={drug.brand} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "2%" }}>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        // tabindex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
