import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/Home";
import SignIn from "./user/pages/SignIn";
import ClientRegister from "./user/pages/ClientRegister.jsx";
import ProductsPage from "./products/pages/Products.tsx";
import ProductsDetails from "./products/pages/ProductDetails";
import SignUpRoleSelect from "./user/pages/RoleSelection.jsx";
import StoreRegister from "./user/pages/StoreRegister.jsx";
import AddProduct from "./products/pages/AddProduct.tsx";
import CartPage from "./orders/pages/Cart.tsx";
import CheckOut from "./orders/pages/CheckOut.tsx";
import { AuthContext } from "./Shared/context/auth-context.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/store" element={<ProductsPage />}></Route>
        <Route path="/products/new" element={<AddProduct />}></Route>
        <Route
          path="/products/:pid/details"
          element={<ProductsDetails />}
        ></Route>
        <Route path="/user/cart" element={<CartPage />}></Route>
        <Route path="/order/checkout" element={<CheckOut />}></Route>
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
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

        {/* until redirect has been fixed*/}
        <Route path="/products/store" element={<ProductsPage />}></Route>
        <Route path="/products/new" element={<AddProduct />}></Route>
        <Route
          path="/products/:pid/details"
          element={<ProductsDetails />}
        ></Route>
        <Route path="/user/cart" element={<CartPage />}></Route>
        <Route path="/order/checkout" element={<CheckOut />}></Route>
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Routes>{routes}</Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
