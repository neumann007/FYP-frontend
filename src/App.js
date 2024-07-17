import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Shared/Footer.css";
import HomePage from "./pages/Home";
import SignIn from "./user/pages/SignIn";
import ClientRegister from "./user/pages/ClientRegister.tsx";
import ProductsPage from "./products/pages/Products.tsx";
import ProductsDetails from "./products/pages/ProductDetails";
import SignUpRoleSelect from "./user/pages/RoleSelection.jsx";
import StoreRegister from "./user/pages/StoreRegister.tsx";
import AddProduct from "./products/pages/AddProduct.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user/account/signin" element={<SignIn />}></Route>
        <Route
          path="/user/account/register/roleSelect"
          element={<SignUpRoleSelect />}
        ></Route>
        <Route
          path="/user/account/register/client"
          element={<ClientRegister />}
        ></Route>
        <Route
          path="/user/account/register/store"
          element={<StoreRegister />}
        ></Route>
        <Route path="/products/store" element={<ProductsPage />}></Route>
        <Route path="/products/details" element={<ProductsDetails />}></Route>
        <Route path="/products/new" element={<AddProduct />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
