import { Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const PublicRoutes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </>
);

export default PublicRoutes;
