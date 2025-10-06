// Custom hook to simulate authentication
export default function useAuth() {
  const isAuthenticated = () => {
    return localStorage.getItem("auth") === "true"; // simple simulation
  };

  return { isAuthenticated };
}
