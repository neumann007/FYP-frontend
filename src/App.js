import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/Home";
import SignIn from "./user/pages/SignIn";
import ClientRegister from "./user/pages/ClientRegister.jsx";
import ProductsPage from "./products/pages/Products.jsx";
import ProductsDetails from "./products/pages/ProductDetails";
import SignUpRoleSelect from "./user/pages/RoleSelection.jsx";
import StoreRegister from "./user/pages/StoreRegister.jsx";
import AddProduct from "./products/pages/AddProduct.jsx";
import CartPage from "./orders/pages/Cart.tsx";
import CheckOut from "./orders/pages/CheckOut.tsx";
import { AuthContext } from "./Shared/context/auth-context.js";
import UpdateProduct from "./products/pages/UpdateProduct";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [accRole, setAccRole] = useState();

  const login = useCallback((uid, accType) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setAccRole(accType);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    setAccRole(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/store" element={<ProductsPage />}></Route>
        <Route path="/products/new" element={<AddProduct />}></Route>
        <Route
          path="/products/:pid/details"
          element={<ProductsDetails />}
        ></Route>
        <Route path="/user/cart" element={<CartPage />}></Route>
        <Route path="/order/checkout" element={<CheckOut />}></Route>
        <Route
          path="/counter/:productId/edit"
          element={<UpdateProduct />}
        ></Route>
      </Routes>
    );
  } else {
    routes = (
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
        {/* Temporal routing till i figure out the redirect issue */}
        <Route path="/products/store" element={<ProductsPage />}></Route>
        <Route path="/products/new" element={<AddProduct />}></Route>
        <Route
          path="/products/:pid/details"
          element={<ProductsDetails />}
        ></Route>
        <Route path="/user/cart" element={<CartPage />}></Route>
        <Route path="/order/checkout" element={<CheckOut />}></Route>
        <Route
          path="/counter/:productId/edit"
          element={<UpdateProduct />}
        ></Route>
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        accRole: accRole,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        {routes}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
