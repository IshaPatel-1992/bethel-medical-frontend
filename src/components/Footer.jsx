import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <section className="footer-brand">
          <h3>Bethel Medical Centres</h3>
          <p>
            Your Health is Our Priority. Providing compassionate family medicine
            and primary healthcare in Strathmore.
          </p>
          <span className="footer-badge">
            <FaHeart /> Accepting New Patients
          </span>
        </section>

        <section className="footer-links">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>

          <a href="/#services">Services</a>

          <a href="/#departments">Departments</a>

          <Link to="/doctors">Doctors</Link>

          <Link to="/appointment">Book Appointment</Link>

          <Link to="/contact">Contact</Link>
        </section>

        <section className="footer-contact">
          <h4>Contact Clinic</h4>
          <p><FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB T1P 0E8</p>
          <p><FaPhoneAlt /> <a href="tel:15872517220">587-251-7220</a></p>
          <p><FaFax /> 833-527-8678</p>
          <p><FaEnvelope /> <a href="mailto:info@bethelmedicalcentres.ca">info@bethelmedicalcentres.ca</a></p>
          <p><FaClock /> Please call for clinic hours & availability.</p>
        </section>
      </div>

      <div className="footer-bottom">
        <span>© {year} Bethel Medical Centres. All rights reserved.</span>
        <span>Designed with care for better patient access.</span>
      </div>
    </footer>
  );
}