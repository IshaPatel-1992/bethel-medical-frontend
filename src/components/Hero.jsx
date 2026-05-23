// src/components/Hero.jsx
import { Link } from "react-router-dom";
import heroVideo from "../assets/services/1090224597-preview.mp4";
//import heroImg from "../assets/banners/shutterstock_1426556459_HomePage.jpg";


export default function Hero() {
  return (
    <section className="hero video-hero">
       <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video> 
      {/*<img src={heroImg} alt="Bethel Medical Centre" className="hero-image" /> */}


      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-label">Bethel Medical Centre</span>
          <h1>Compassionate Healthcare for Your Family</h1>
          <p>
            Providing modern, reliable, and patient-focused medical care for
            individuals and families.
          </p>

          <div className="hero-actions">
            <Link to="/appointment" className="btn primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn secondary">
              View Services
            </Link>
          </div>
        </div>

        <div className="hero-contact-card">
          <h3>Contact Clinic</h3>
          <p><strong>Phone:</strong> 587-251-7220</p>
          <p><strong>Fax:</strong> 833-527-8678</p>
          <p><strong>Email:</strong> info@bethelmedicalcentres.ca</p>
          <p><strong>Location:</strong> 120 Edgefield Place, Strathmore, AB</p>
        </div>
      </div>
    </section>
  );
}