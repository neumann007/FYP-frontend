import React, { useEffect, useState } from "react";

import "./Products.css";
import Layout from "../../Shared/Layout";
import ProductCard from "../components/ProductCard";
import drugs from "../drugs";
// import ErrorModal from "../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import NavFilters from "../components/Filters";
import { useHttpClient } from "../../Shared/hooks/http-hook";

const ProductsPage = () => {
  let drugList;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const { loadedProducts, setLoadedProducts } = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/products/"
        );

        setLoadedProducts(responseData.products);
      } catch (error) {}
    };
    fetchProducts();
  }, [sendRequest, setLoadedProducts]);

  drugList = drugs;


  return (
    <React.Fragment>
      <div>
        {isLoading && <LoadingSpinner asOverlay />}
        <Layout>
          <div className="col-md-12" id="faded_back">
            <div
              className="container"
              style={{ background: "white", zIndex: "2", marginBottom: "5%" }}
            >
              <div className="col-md-12" id="marginated">
                <div className="row">
                  <NavFilters />
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-4">
                        <h4>All Products</h4>
                      </div>
                      <div className="col-8" id="add-butt">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg "
                          style={{
                            display: "inline-block",
                            float: "inline-end",
                          }}
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
                        {!isLoading &&
                          // loadedProducts &&
                          drugList.map((drug) => (
                            <ProductCard
                              title={drug.name}
                              img={drug.imageUrl}
                              key={drug.id}
                              price={drug.price}
                              id={drug.id}
                              mfg={drug.brand}
                            />
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
      </div>
    </React.Fragment>
  );
};

export default ProductsPage;
