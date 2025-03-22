import { Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {AuthRoutes()}
      {DashboardRoutes()}
    </Routes>
  );
}
