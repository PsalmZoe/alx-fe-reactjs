import { Navigate } from "react-router-dom";

// Simple auth simulation
const isAuthenticated = () => {
  // Replace with real auth logic
  return localStorage.getItem("auth") === "true";
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
