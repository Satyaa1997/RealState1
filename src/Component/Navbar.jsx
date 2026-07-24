import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo3 from "../assets/logopng.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo3} alt="logo3" />
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li className="dropdown">
  <Link to="/service" onClick={() => setMenuOpen(false)}>
    Service
  </Link>

  <ul className="dropdown-menu">
    <li>
      <Link to="/services/exhibition" onClick={() => setMenuOpen(false)}>
        Exhibition Stands
      </Link>
    </li>

    <li>
      <Link to="/services/fabrication" onClick={() => setMenuOpen(false)}>
        Fabrication Work
      </Link>
    </li>

    <li>
      <Link to="/services/stylefoam" onClick={() => setMenuOpen(false)}>
        Stylefoam Arts
      </Link>
    </li>

    <li>
      <Link to="/services/technical" onClick={() => setMenuOpen(false)}>
        Technical Services
      </Link>
    </li>
  </ul>
</li>

        <li>
          <Link to="/project" onClick={() => setMenuOpen(false)}>
            Project
          </Link>
        </li>

        <li>
          <Link to="/testimonial" onClick={() => setMenuOpen(false)}>
            Testimonial
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        <li className="mobile-btn">
          <button className="inquiry-btn" onClick={()=> navigate("/contact")}>Inquiry Now</button>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="inquiry-btn desktop-btn" onClick={()=> navigate("/contact")}>Inquiry Now</button>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
