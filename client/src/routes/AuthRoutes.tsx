import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext/AuthContext";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const AuthRoutes = () => {
  const { isAuthenticated } = useAuth(); 

  return (
    <>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
      />
    </>
  );
};

export default AuthRoutes;
