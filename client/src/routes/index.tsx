import { Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext/AuthContext";
import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";
import Header from "../components/Header/Header";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuthPage = ["/login", "/signup"].includes(location.pathname);
    if (!isAuthenticated && !isAuthPage) navigate("/login");
  }, [isAuthenticated, location.pathname, navigate]);

  const shouldApplyPadding =
    isAuthenticated && !["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {isAuthenticated && <Header />}
      <Routes>{AuthRoutes()}</Routes>
      {isAuthenticated && (
        <div className={shouldApplyPadding ? "px-5 py-5" : ""}>
          <Routes>{DashboardRoutes()}</Routes>
        </div>
      )}
    </>
  );
}
