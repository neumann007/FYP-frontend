import React from "react";
import "./Shared/Footer.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignIn from "./user/pages/SignIn";
import ClientRegister from "./user/pages/ClientRegister.jsx";
import ProductsPage from "./products/pages/Products.tsx";
import ProductsDetails from "./products/pages/ProductDetails";
import SignUpRoleSelect from "./user/pages/RoleSelection.jsx";

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
          path="/user/account/register/client"
          element={<ClientRegister />}
        ></Route>
        <Route path="/products/store" element={<ProductsPage />}></Route>
        <Route path="/products/details" element={<ProductsDetails />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
