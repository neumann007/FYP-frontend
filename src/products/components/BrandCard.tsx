import React from "react";

const Brands = () => {
  return (
    <div className="col-10">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="h5 card-title">Product type</h3>
          <ul className="list-group text-gray">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
              <a href="#" className="text-decoration-none" id="cat_link">
                Anti-biotics
              </a>
              <span className="badge bg-gray badge-pill">123</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
              <a href="#" className="text-decoration-none" id="cat_link">
                Pain Relief
              </a>
              <span className="badge bg-gray badge-pill">330</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
              <a href="#" className="text-decoration-none" id="cat_link">
                Supplements
              </a>
              <span className="badge bg-gray badge-pill">99</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
              <a href="#" className="text-decoration-none" id="cat_link">
                Dewormer
              </a>
              <span className="badge bg-gray badge-pill">210</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-1 px-0 font-small">
              <a href="#" className="text-decoration-none" id="cat_link">
                Vitamins
              </a>
              <span className="badge bg-gray badge-pill">134</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
