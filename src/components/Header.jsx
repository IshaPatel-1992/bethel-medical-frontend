import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/BethelMedicalCentreLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goHomeTop = () => {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <header className="site-header">
      <div className="top-bar">
        <span><FaPhoneAlt /> 587-251-7220</span>
        <span><FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB</span>
      </div>

      <div className="main-nav">
        <Link to="/" className="brand" onClick={goHomeTop}>
          <img src={logo} alt="Bethel Medical Centres" className="brand-logo" />
          <div className="brand-text">
            <h1>Bethel Medical Centres</h1>
            <p>Your Health is Our Priority</p>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button className="nav-scroll-btn" type="button" onClick={goHomeTop}>
            Home
          </button>

          <button
            className="nav-scroll-btn"
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className="nav-scroll-btn"
            type="button"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <button
            className="nav-scroll-btn"
            type="button"
            onClick={() => scrollToSection("departments")}
          >
            Departments
          </button>

          <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</NavLink>
          <NavLink to="/appointment" onClick={() => setMenuOpen(false)}>Appointment</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}