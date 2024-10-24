import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
