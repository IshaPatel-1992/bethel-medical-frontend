// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-top">
        <section className="footer-brand">
          <h3>Bethel Medical Centre</h3>
          <p>Compassionate, modern healthcare for you and your family.</p>
        </section>

        <nav className="footer-links" aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <section className="footer-contact">
          <h4>Contact</h4>
          <p>123 Health Street, City</p>
          <p>Phone: +1 (555) 123‑4567</p>
          <p>Email: info@bethelmedical.com</p>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {year} Bethel Medical Centre. All rights reserved.</p>
      </div>
    </footer>
  );
}
