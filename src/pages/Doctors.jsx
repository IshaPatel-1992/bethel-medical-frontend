import {
  FaUserMd,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStethoscope,
} from "react-icons/fa";

import imgHero from "../assets/banners/shutterstock_2544841683_optimized.webp";
import SEO from "../components/SEO.jsx";

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
      <SEO
        title="Doctors | Bethel Medical Centres Strathmore"
        description="Meet the family physicians at Bethel Medical Centres in Strathmore, Alberta. Our medical team provides compassionate, patient-centred primary healthcare for individuals and families."
        path="/doctors"
      />
      <section className="doctors-marquee">
        <div className="doctors-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>

      <section className="doctors-hero">
        <img src={imgHero} alt="Doctors Hero" className="doctors-hero-image" />

        <div className="doctors-hero-overlay" />

        <div className="doctors-hero-content">
          <span>
            <FaStethoscope /> Experienced Family Physicians
          </span>

          <h1>Meet Our Medical Team</h1>

          <p>
            Dedicated family physicians providing compassionate,
            patient-centred healthcare for individuals and families
            in Strathmore and surrounding communities.
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