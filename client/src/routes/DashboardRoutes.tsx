import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext/AuthContext";
import Course from "../pages/Course/Information/Information";
import CourseList from "../pages/Course/List/List";
import Project from "../pages/Project/Information/Information";
import ProjectList from "../pages/Project/List/List";
import Society from "../pages/Society/Information/Information";
import SocietyList from "../pages/Society/List/List";
import Department from "../pages/Department/Information/Information";
import DepartmentList from "../pages/Department/List/List";
import Faculty from "../pages/Faculty/Information/Information";
import FacultyList from "../pages/Faculty/List/List";
import Announcement from "../pages/Announcement/Information/Information";
import AnnouncementList from "../pages/Announcement/List/List";

const DashboardRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Route
        path="/courses"
        element={isAuthenticated ? <CourseList /> : <Navigate to="/login" />}
      />
      <Route
        path="/course/:id"
        element={isAuthenticated ? <Course /> : <Navigate to="/login" />}
      />
      <Route
        path="/projects"
        element={isAuthenticated ? <ProjectList /> : <Navigate to="/login" />}
      />
      <Route
        path="/project/:id"
        element={isAuthenticated ? <Project /> : <Navigate to="/login" />}
      />
      <Route
        path="/societies"
        element={isAuthenticated ? <SocietyList /> : <Navigate to="/login" />}
      />
      <Route
        path="/society/:id"
        element={isAuthenticated ? <Society /> : <Navigate to="/login" />}
      />
      <Route
        path="/departments"
        element={
          isAuthenticated ? <DepartmentList /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/department/:id"
        element={isAuthenticated ? <Department /> : <Navigate to="/login" />}
      />
      <Route
        path="/faculties"
        element={isAuthenticated ? <FacultyList /> : <Navigate to="/login" />}
      />
      <Route
        path="/faculty/:id"
        element={isAuthenticated ? <Faculty /> : <Navigate to="/login" />}
      />
      <Route
        path="/announcements"
        element={
          isAuthenticated ? <AnnouncementList /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/announcement/:id"
        element={isAuthenticated ? <Announcement /> : <Navigate to="/login" />}
      />
    </>
  );
};

export default DashboardRoutes;
