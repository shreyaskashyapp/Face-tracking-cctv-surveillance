import react from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/">
        <li className={location.pathname === "/" ? "nav-bar-active" : ""}>
          Home
        </li>
      </Link>

      <Link to="/finds">
        <li className={location.pathname === "/finds" ? "nav-bar-active" : ""}>
          Finds
        </li>
      </Link>

      <Link to="/face">
        <li className={location.pathname === "/face" ? "nav-bar-active" : ""}>
          FaceRecognition
        </li>
      </Link>

      <Link to="/car">
      <li className={location.pathname === "/face" ? "nav-bar-active" : ""}>
        ninaknVarun

      </li>
    </Link>
    </nav>
  );
}
