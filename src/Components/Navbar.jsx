import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Logo</div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <i className={isOpen ? <FaTimes/> : <FaBars/>}>
            {
              isOpen? (
                <FaTimes className="menu-icon-close"/>
              ) : (
                <FaBars className="menu-icon-open"/>
              )
            }
          </i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about"  className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

