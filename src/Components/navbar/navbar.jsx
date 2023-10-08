import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link className="link" to="/">
          Dashboard
        </Link>
        <Link className="link" to="excercise">
          Exercise Tracking
        </Link>
        <Link className="link" to="food">
          Food Tracking
        </Link>
        <Link className="link" to="goal">
          Goal Tracking
        </Link>
      </nav>
    </div>
  );
}
