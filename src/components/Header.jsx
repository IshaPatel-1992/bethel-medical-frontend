import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/BethelMedicalCentreLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <span><FaPhoneAlt /> 587-251-7220</span>
        <span><FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB</span>
      </div>

      <div className="main-nav">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="Bethel Medical Centres"
            className="brand-logo"
          />

          <div className="brand-text">
            <h1>Bethel Medical Centres</h1>
            <p>Your Health is Our Priority</p>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/departments" onClick={() => setMenuOpen(false)}>Departments</NavLink>
          <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</NavLink>
          <NavLink to="/appointment" onClick={() => setMenuOpen(false)}>Appointment</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}