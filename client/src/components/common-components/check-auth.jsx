import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // if user is not authenticated and they are not already in the login or 
  // register pages, then they should be redirected to (auth/login) login page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // if user is authenticated and tries to access the /login or /register page
  // then based on role, user is redirected to the respective pages i.e. if role is
  // admin then they are redirected to admin/dashboard page otherwiese shop/home page

  if (
    (isAuthenticated && location.pathname.includes("/login")) ||
    location.pathname.includes("/register")
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // if the user is not an admin and tries to access the admin page then they are
  // redirected to the /unauth-page.
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }
  
  // if the user is authenticated and is admin and tries to access shop related page
  // then user is redirected to the /admin/dashboard page
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
