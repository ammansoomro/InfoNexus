import { useAuth } from "./context/AuthContext/AuthContext";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/signup") {
      navigate("/login");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <>
      {isAuthenticated && <Header />}
      <AppRoutes />
    </>
  );
}
