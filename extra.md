<div className="container">
        <div className="col-md-12" id="marginated">
          <div className="row">
            <div className="col-md-3 order-1 mb-5 mb-md-0">
              <div className="border p-4 rounded mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Categories
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Men</span>{" "}
                      <span className="text-black ml-auto">(2,220)</span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Women</span>{" "}
                      <span className="text-black ml-auto">(2,550)</span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="d-flex">
                      <span>Children</span>{" "}
                      <span className="text-black ml-auto">(2,124)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border p-4 rounded mb-4">
                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                  <div id="slider-range" className="border-primary"></div>
                  <input
                    type="text"
                    name="text"
                    id="amount"
                    class="form-control border-0 pl-0 bg-white"
                    disabled=""
                  />
                </div>

                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Size
                  </h3>
                  <label htmlFor="s_sm" className="d-flex">
                    <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
                    <span className="text-black">Small (2,319)</span>
                  </label>
                  <label htmlFor="s_md" className="d-flex">
                    <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
                    <span className="text-black">Medium (1,282)</span>
                  </label>
                  <label htmlFor="s_lg" className="d-flex">
                    <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
                    <span className="text-black">Large (1,392)</span>
                  </label>
                </div>

                <div className="mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Color
                  </h3>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Red (2,429)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-success color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Green (2,298)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-info color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Blue (1,075)</span>
                  </a>
                  <a href="#" className="d-flex color-item align-items-center">
                    <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
                    <span className="text-black">Purple (1,075)</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="col-md-12">
                <div className="row">
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

































      <div className="col-md-3">
              <div className="col-md-12" id="cat_space">
                <div id="sidebar_title">Categories</div>
                <div id="category_item">
                  <ul>
                    <li>Sample Category Names</li>
                  </ul>
                </div>
                <hr />
                <div id="filter_headings">Brands</div>
                <div id="check">
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Abreva(1) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Acure(2) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Adidas(6) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Afnan(1) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Afta(2) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Alaffia(1) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Alba Botanica(11) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Albolene(1) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Almay(16) </label>
                  <br />
                  <input type="checkbox" id="" />{" "}
                  <label for="abreva"> Alyssa Ashely(2) </label>
                  <br />
                </div>
                <hr />
                <div id="filter_headings">Price</div>

                <hr />
              </div>
            </div>












            <div className="row">
                <div className="col-10">
                  <div className="card shadow">
                    <div className="card-body">
                      <h3 className="h5 card-title">Price range</h3>
                      {/* <!-- Simple slider --> */}
                      <div className="input-slider-container">
                        <div
                          id="input-slider-ecommerce"
                          className="input-slider"
                          data-range-value-min="100"
                          data-range-value-max="500"
                        ></div>
                        {/* <!-- Input slider values --> */}
                        <div className="row mt-3 d-none">
                          <div className="col-6">
                            <span
                              id="input-slider-value"
                              className="range-slider-value"
                              data-range-value-low="200"
                            ></span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End of Slider --> */}
                      <div className="d-flex mb-3">
                        <div className="col-md-6 me-2">
                          <label htmlFor="priceRangeMin1">Min</label>
                          <input
                            className="form-control"
                            id="priceRangeMin1"
                            placeholder="$0"
                            type="number"
                          />
                        </div>
                        <div className="col-md-6 text-right">
                          <label htmlFor="priceRangeMax1">Max</label>
                          <input
                            className="form-control"
                            id="priceRangeMax1"
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="d-grid">
                        <a href="#" className="btn btn-tertiary">
                          Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              