import { createContext, useState, type ReactNode } from "react";
import { type authStateType } from "../types";

type authContextType = authStateType & {
  signInHandle: () => void;
  signOutHandle: () => void;
};

const AuthContext = createContext<authContextType | null>(null);

function AuthProvider(props: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctx: authContextType = {
    isLoggedIn,
    signInHandle: function () {
      setIsLoggedIn(true);
    },
    signOutHandle() {
      setIsLoggedIn(false);
    },
  };
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;
export { AuthContext };
