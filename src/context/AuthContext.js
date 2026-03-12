import { createContext, useContext, useState, useEffect } from "react";
import { getAuthStatus, loginUser, logoutUser } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const status = await getAuthStatus();
      setIsAuthenticated(status);
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (username, email) => {
    await loginUser(username, email);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await logoutUser();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);