import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";

import { RiInformationLine } from "react-icons/ri";

export default function Header() {
  const isActive = useSelector((state) => state.isActive);

  return (
    <header className="header">
      <Link to="/" className="heading">
        Fitness Tracker
      </Link>
      <Link
        to="/about"
        className={isActive === "about" ? "isActiveAbout" : "about"}
      >
        about <RiInformationLine className="icon" />
      </Link>
    </header>
  );
}
