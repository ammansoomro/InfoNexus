import { Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {PublicRoutes}
      {AuthRoutes()}
      {DashboardRoutes()}
    </Routes>
  );
}
