import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const jwt = localStorage.getItem("access_token");

  if (!jwt) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
