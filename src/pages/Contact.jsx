import {
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
  FaNotesMedical,
  FaCalendarCheck,
  FaUserPlus,
  FaWheelchair,
  FaParking,
  FaInfoCircle,
} from "react-icons/fa";

import contactBanner from "../assets/banners/shutterstock_1937449273_optimized.webp";

const clinic = {
  name: "BETHEL MEDICAL CENTRES",
  phone: "587-251-7220",
  phoneLink: "+15872517220",
  fax: "833-527-8678",
  email: "info@bethelmedicalcentres.ca",
  address: "120 Edgefield Place, Strathmore, AB T1P 0E8",
  hours: "Monday – Friday: 9:30 AM – 5:00 PM",
  holiday: "Closed on statutory holidays",
};

const directionUrl =
  "https://www.google.com/maps/search/?api=1&query=120%20Edgefield%20Place%20Strathmore%20AB%20T1P%200E8";

const mapUrl =
  "https://www.google.com/maps?q=120%20Edgefield%20Place%20Strathmore%20AB%20T1P%200E8&output=embed";

export default function Contact() {
  return (
    <>
      <section
        className="page-hero page-hero-banner"
        style={{
          backgroundImage: `linear-gradient(
      rgba(15,45,75,0.75),
      rgba(15,45,75,0.75)
    ), url(${contactBanner})`,
        }}
      >
        <div className="page-hero-content">
          <span className="hero-badge">Contact Us</span>

          <h1>{clinic.name}</h1>

          <p>
            We are here to support you and your family with compassionate,
            patient-centred healthcare in Strathmore.
          </p>

          <div className="hero-contact-actions">
            <a href={`tel:${clinic.phoneLink}`} className="hero-btn primary">
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href={directionUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-btn secondary"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-heading-center">
          <span className="section-label">Get In Touch</span>

          <h2>Clinic Contact Information</h2>

          <p>
            Please contact the clinic for appointments, patient enquiries,
            registration assistance, medical forms, directions, and appointment
            availability.
          </p>
        </div>

        <div className="contact-quick-actions">
          <a href={`tel:${clinic.phoneLink}`} className="contact-quick-btn primary">
            <FaPhoneAlt />
            Call Clinic
          </a>

          <a href={`mailto:${clinic.email}`} className="contact-quick-btn">
            <FaEnvelope />
            Email Clinic
          </a>

          <a
            href={directionUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-quick-btn"
          >
            <FaDirections />
            Get Directions
          </a>
        </div>

        <div className="contact-overview-grid">
          <div className="unified-card contact-card">
            <div className="unified-card-icon">
              <FaNotesMedical />
            </div>

            <h3>{clinic.name}</h3>

            <p className="contact-card-text">
              For appointments, new patient information, walk-in availability,
              medical forms, and general clinic enquiries.
            </p>

            <div className="contact-info-list">
              <a href={`tel:${clinic.phoneLink}`} className="contact-info-line">
                <FaPhoneAlt />
                <span>{clinic.phone}</span>
              </a>

              <div className="contact-info-line">
                <FaFax />
                <span>{clinic.fax}</span>
              </div>

              <a href={`mailto:${clinic.email}`} className="contact-info-line">
                <FaEnvelope />
                <span>{clinic.email}</span>
              </a>

              <a
                href={directionUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-info-line"
              >
                <FaMapMarkerAlt />
                <span>{clinic.address}</span>
              </a>
            </div>
          </div>

          <div className="unified-card contact-card">
            <div className="unified-card-icon">
              <FaClock />
            </div>

            <h3>Clinic Hours</h3>

            <div className="hours-clean-list">
              <div className="hours-clean-row">
                <span>Monday – Friday</span>
                <strong>9:30 AM – 5:00 PM</strong>
              </div>

              <div className="hours-clean-row holiday">
                <span>Statutory Holidays</span>
                <strong>Closed</strong>
              </div>
            </div>

            <div className="contact-note">
              <FaInfoCircle />
              <span>
                Appointment availability may vary. Please call before visiting.
              </span>
            </div>
          </div>

          <div className="unified-card contact-card">
            <div className="unified-card-icon">
              <FaUserPlus />
            </div>

            <h3>New Patients</h3>

            <p className="contact-card-text">
              BETHEL MEDICAL CENTRES is accepting new patients and families.
              Please call, email, or complete the online booking request form
              from the appointment page.
            </p>

            <a href="/appointment" className="contact-inline-btn">
              <FaCalendarCheck />
              Request an Appointment
            </a>
          </div>

          <div className="unified-card contact-card">
            <div className="unified-card-icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Visit Information</h3>

            <div className="visit-feature-list">
              <div>
                <FaParking />
                Parking available
              </div>

              <div>
                <FaWheelchair />
                Accessible location
              </div>

              <div>
                <FaDirections />
                Located in Strathmore, AB
              </div>
            </div>

            <a
              href={directionUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-inline-btn secondary"
            >
              <FaDirections />
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="location-map-card">
          <div className="location-map-header">
            <div>
              <span className="section-label">Our Location</span>

              <h3>Find {clinic.name}</h3>

              <p>
                Conveniently located in Strathmore, Alberta. Please contact the
                clinic before visiting for appointment availability.
              </p>
            </div>

            <a
              href={directionUrl}
              target="_blank"
              rel="noreferrer"
              className="map-direction-btn"
            >
              <FaDirections />
              Directions
            </a>
          </div>

          <div className="map-address-pill">
            <FaMapMarkerAlt />
            <span>{clinic.address}</span>
          </div>

          <div className="map-section">
            <iframe
              title="BETHEL MEDICAL CENTRES Map"
              src={mapUrl}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
