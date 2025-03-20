import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";

export default function App() {
  const isLoggedIn = false;

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <></> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
