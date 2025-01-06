import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import AdminProduct from "./pages/admin-view/product";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFoundPage from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout/>}>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="checkout" element={<ShoppingCheckout/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
