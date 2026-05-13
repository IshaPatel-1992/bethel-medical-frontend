import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <section>
          <h3>Bethel Medical Centres</h3>
          <p>Your Health is Our Priority. Accepting new patients and welcoming families.</p>
        </section>

        <section>
          <h4>Quick Links</h4>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/contact">Contact</Link>
        </section>

        <section>
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB T1P 0E8</p>
          <p><FaPhoneAlt /> 587-251-7220</p>
          <p><FaFax /> 833-527-8678</p>
          <p><FaEnvelope /> info@bethelmedicalcentres.ca</p>
        </section>
      </div>

      <div className="footer-bottom">
        © {year} Bethel Medical Centres. All rights reserved.
      </div>
    </footer>
  );
}