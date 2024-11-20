import { createContext } from "react";

const AuthContext = createContext({
  email: null,
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
