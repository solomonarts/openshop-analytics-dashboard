import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "./Common";

const useAuth = () => {
  const user = getUser();
  return user;
};

// handle the private routes
function PrivateRoute() {
  const isAuth = useAuth();
  // console.log("ussssssss", getUser(), isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
