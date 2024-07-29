import React from "react";
import Brands from "./BrandCard";
import Categories from "./CategoriesCard";
import PriceSlider from "./PriceSlider";

const NavFilters = () => {
    return (
      <div className="col-md-3" style={{ marginLeft: "40px" }}>
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "18px" }}>
            <h5 style={{ height: "35px" }}>Filters / Navigations</h5>
          </div>
        </div>
        <div className="row">
          <Brands />
        </div>
        <div className="row" style={{ marginTop: "5px" }}>
          <Categories />
        </div>
        <div className="row" style={{ marginTop: "5px" }}>
          <div className="col-10">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="h5 card-title">Price Range</h3>
                <div className="row">
                  <div
                    className="col-md-11"
                    style={{ marginLeft: "12px", padding: "0" }}
                  >
                    <PriceSlider />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        id="create_sub"
                        value="Filter"
                        style={{
                          marginLeft: "75px",
                          marginTop: "15px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NavFilters