import {
  FaUserMd,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStethoscope,
} from "react-icons/fa";

import heroVideo from "../assets/services/1090224597-preview.mp4";

const marqueeItems = [
  "Male & Female Family Physicians Available",
  "Professional Driver Medical Examinations",
  "Accepting Family Care Enquiries",
  "Preventive Healthcare & Annual Physicals",
  "Walk-In & Family Medical Services",
  "Paediatric Care Services",
  "Chronic Disease Management",
  "Immunisation & Vaccination Services",
  "Women’s Health Services",
];

const doctors = [
  {
    name: "Dr. Izegbuwa Obuehi",
    title: "Specialist Family Physician",
    credentials: "MD, MBBS, MPH, MRCGP, CCFP",
    description:
      "Dr. Izegbuwa Obuehi provides compassionate family medicine and primary care services for individuals and families.",
  },
  {
    name: "Dr. Felix Obuehi",
    title: "Family Physician",
    credentials: "MD, MBBS, NIM, MHM, MRCGP, CCFP",
    description:
      "Dr. Felix Obuehi is dedicated to providing patient-centred primary care and supporting long-term health and wellbeing.",
  },
];

export default function Doctors() {
  return (
    <>
      <section className="doctors-marquee">
        <div className="doctors-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>

      <section className="doctors-hero">
        <video className="doctors-hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="doctors-hero-overlay" />

        <div className="doctors-hero-content">
          <span>
            <FaStethoscope /> Our Medical Team
          </span>

          <h1>Our Doctors</h1>

          <p>
            Meet the caring healthcare professionals supporting your health and
            wellbeing.
          </p>
        </div>
      </section>

      <section className="section doctors-section">
        <div className="doctors-intro">
          <p className="section-label">Trusted Family Care</p>

          <h2>Compassionate Care for Every Stage of Life</h2>

          <p>
            Our physicians provide professional, friendly, and patient-centred
            healthcare for individuals and families in Strathmore and the
            surrounding communities.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="about-card doctor-card" key={doctor.name}>
              <div className="about-card-icon doctor-card-icon">
                <FaUserMd />
              </div>

              <p className="doctor-label">{doctor.title}</p>

              <h3>{doctor.name}</h3>

              <p className="doctor-credentials">{doctor.credentials}</p>

              <p>{doctor.description}</p>

              <div className="doctor-contact-grid">
                <p>
                  <FaPhoneAlt /> 587-251-7220
                </p>
                <p>
                  <FaFax /> 833-527-8678
                </p>
                <p>
                  <FaEnvelope /> info@bethelmedicalcentres.ca
                </p>
                <p>
                  <FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB T1P
                  0E8
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}