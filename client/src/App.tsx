import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext/AuthContext";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <h1>Welcome Home</h1> : <Navigate to="/login" />}
      />
      
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
  );
}
