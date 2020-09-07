import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../component/context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("login_data") && isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
