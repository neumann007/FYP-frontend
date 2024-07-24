import React from "react";

const Categories = () => {
    return (
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
                  <label className="form-check-label" htmlFor="cartCheck6">
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
                  <label className="form-check-label" htmlFor="cartCheck7">
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
                  <label className="form-check-label" htmlFor="cartCheck8">
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
                  <label className="form-check-label" htmlFor="cartCheck9">
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
                  <label className="form-check-label" htmlFor="cartCheck10">
                    Medisoft
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Categories;