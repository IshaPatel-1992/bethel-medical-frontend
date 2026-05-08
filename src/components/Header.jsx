// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        Bethel Medical Centre
      </Link>

      {/* Hamburger Icon */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>

      {/* Navigation */}
      <nav className={menuOpen ? "nav open" : "nav"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/departments" onClick={() => setMenuOpen(false)}>Departments</NavLink>
        <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</NavLink>
        <NavLink to="/appointment" onClick={() => setMenuOpen(false)}>Appointment</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  );
}
