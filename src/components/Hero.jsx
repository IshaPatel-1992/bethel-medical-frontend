// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Bethel Medical Centre</h1>
        <p>Providing compassionate, modern healthcare so you and your family stay healthy—always.</p>
        <div className="hero-actions">
          <Link to="/appointment" className="btn primary">Book Appointment</Link>
          <Link to="/services" className="btn secondary">View Services</Link>
        </div>
      </div>
    </section>
  );
}
