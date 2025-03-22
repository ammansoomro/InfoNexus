import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

const menuItems = [
  { name: "Courses", path: "/courses" },
  { name: "Faculty", path: "/faculty" },
  { name: "Departments", path: "/departments" },
  { name: "Societies", path: "/societies" },
  { name: "Projects", path: "/projects" },
  { name: "Announcements", path: "/announcements" },
];

const Navbar: React.FC = () => {
  const { logout, isAuthenticated } = useAuth();

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-gray-900 text-white shadow-lg">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png"
          alt="FAST Logo"
          className="h-10"
        />
        <h1 className="text-xl font-semibold">FastCentralHub</h1>
      </Link>

      <ul className="hidden md:flex gap-6 font-medium">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="hover:text-blue-400 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
            {JSON.parse(localStorage.getItem("user")!)
              .username.charAt(0)
              .toUpperCase()}
          </span>
          <button
            onClick={() => {
              logout();
            }}
            className="text-red-400 hover:text-red-500 transition font-medium"
          >
            Log out
          </button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
