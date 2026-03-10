import { Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAuthStatus } from "../api/api";

const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: getAuthStatus
  });
};

const PrivateRoute = ({ children }) => {
  const { data: isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;