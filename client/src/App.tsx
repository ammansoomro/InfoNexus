import { useAuth } from "./context/AuthContext/AuthContext";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {isAuthenticated && <Header />}
      <AppRoutes />
    </>
  );
}
