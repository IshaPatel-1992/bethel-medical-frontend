// src/components/Hero.jsx
import { Link } from "react-router-dom";
import heroVideo from "../assets/services/1090224597-preview.mp4";

export default function Hero() {
  const marqueeItems = [
    "Accepting New Patients",
    "Chronic Health Conditions Management and Ongoing Care",
    "Preventive Healthcare & Annual Physicals",
    "Walk-In & Family Medical Services",
    "Women's Health Services",
    "Men's Health Services",
    "Elderly Care Services",
    "Paediatric Care Services",
    "General Health & Wellness",
    "Immunisation & Vaccination Services",
    "Professional Driver Medical Examinations",
    "Preventive Health Screening",
  ];

  return (
    <>
      <section className="doctors-marquee">
        <div className="doctors-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>

      <section className="hero video-hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-label">Accepting New Patients</span>

            <h1 className="hero-brand-name">
              BETHEL MEDICAL CENTRES
            </h1>

            <h2 className="hero-tagline">
              Healthcare for You and Your Family
            </h2>

            <p>
              Providing comprehensive, patient-centred healthcare for individuals
              and families in Strathmore and the surrounding communities.
            </p>

            <div className="hero-actions">
              <Link to="/appointment" className="btn primary">
                Book an Appointment
              </Link>

              <a href="/#services" className="btn secondary">
                View Services
              </a>
            </div>
          </div>

          <div className="hero-contact-card">
            <h3>Clinic Contact Details</h3>

            <a href="tel:+15872517220" className="hero-contact-link">
              <strong>Phone:</strong> 587-251-7220
            </a>

            <a href="fax:18335278678" className="hero-contact-link">
              <strong>Fax:</strong> 833-527-8678
            </a>

            <a
              href="mailto:info@bethelmedicalcentres.ca"
              className="hero-contact-link"
            >
              <strong>Email:</strong> info@bethelmedicalcentres.ca
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=120+Edgefield+Place+Strathmore+AB"
              target="_blank"
              rel="noreferrer"
              className="hero-contact-link"
            >
              <strong>Location:</strong> 120 Edgefield Place, Strathmore, AB
            </a>
          </div>
        </div>
      </section>
    </>
  );
}