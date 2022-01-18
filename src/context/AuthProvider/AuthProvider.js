import { createContext } from "react";
import useCredentials from "../../hooks/useCredentials";

// creating auth context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useCredentials();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
