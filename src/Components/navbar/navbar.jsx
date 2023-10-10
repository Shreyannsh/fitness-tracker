import { useSelector } from "react-redux";
import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const isActive = useSelector((state) => state.isActive);
  return (
    <div>
      <nav className="navbar">
        <Link className={isActive === "dashboard" ? "isActive" : "link"} to="/">
          Dashboard
        </Link>
        <Link
          className={isActive === "excercise" ? "isActive" : "link"}
          to="excercise"
        >
          Exercise Tracking
        </Link>
        <Link className={isActive === "food" ? "isActive" : "link"} to="food">
          Food Tracking
        </Link>
        <Link className={isActive === "goal" ? "isActive" : "link"} to="goal">
          Goal Tracking
        </Link>
      </nav>
    </div>
  );
}
