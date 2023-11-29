import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="heading">
        Fitness Tracker
      </Link>
    </header>
  );
}
