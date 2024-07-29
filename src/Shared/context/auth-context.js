import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  accRole: null,
  login: () => {},
  logout: () => {},
});
