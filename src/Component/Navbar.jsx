import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo3 from "../assets/logo3.JPG";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo3} alt="logo3" />
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#service" onClick={() => setMenuOpen(false)}>Service</a></li>
        <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
        <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

        <button className="inquiry-btn mobile-btn">
          Inquiry Now
        </button>
      </ul>

      {/* Desktop Button */}
      <button className="inquiry-btn desktop-btn">
        Inquiry Now
      </button>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;