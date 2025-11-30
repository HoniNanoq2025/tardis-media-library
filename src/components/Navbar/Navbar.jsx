import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "bg-blue-700" : "hover:bg-blue-700";
  };

  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 py-4">
            <span className="text-2xl">🕰️</span>
            <span className="text-xl font-bold">TARDIS Media Library</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition duration-200 ${isActive(
                "/"
              )}`}
            >
              Dashboard
            </Link>
            <Link
              to="/library"
              className={`px-4 py-2 rounded-lg transition duration-200 ${isActive(
                "/library"
              )}`}
            >
              My Library
            </Link>
            <Link
              to="/add"
              className={`px-4 py-2 rounded-lg transition duration-200 ${isActive(
                "/add"
              )}`}
            >
              Add Episode
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition duration-200 ${isActive(
                "/about"
              )}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
