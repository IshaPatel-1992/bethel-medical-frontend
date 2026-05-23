import {
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>
          We are here to support you and your family with compassionate healthcare.
        </p>
      </section>

      <section className="section contact-section">
        <div className="section-heading-center">
          <span className="section-label">Get In Touch</span>
          <h2>Contact Bethel Medical Centres</h2>
          <p>
            Please call or email the clinic for appointments, inquiries, and
            patient information.
          </p>
        </div>

        <div className="contact-layout">
          <div className="about-card contact-card">
            <div className="about-card-icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Clinic Information</h3>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>120 Edgefield Place, Strathmore, AB T1P 0E8</span>
            </div>

            <a href="tel:15872517220" className="contact-action-btn phone-btn">
              <FaPhoneAlt />
              Call Clinic
            </a>

            <div className="contact-detail-line">
              <FaPhoneAlt />
              <span>587-251-7220</span>
            </div>

            <div className="contact-item">
              <FaFax />
              <span>833-527-8678</span>
            </div>

            <a
              href="mailto:info@bethelmedicalcentres.ca"
              className="contact-action-btn email-btn"
            >
              <FaEnvelope />
              Email Clinic
            </a>

            <div className="contact-detail-line">
              <FaEnvelope />
              <span>info@bethelmedicalcentres.ca</span>
            </div>
          </div>

          <div className="about-card contact-card">
            <div className="about-card-icon">
              <FaClock />
            </div>

            <h3>Clinic Hours</h3>

            <div className="hours-row">
              <span>Monday – Friday</span>
              <strong>Please call clinic</strong>
            </div>

            <div className="hours-row">
              <span>Saturday</span>
              <strong>Please call clinic</strong>
            </div>

            <div className="hours-row">
              <span>Sunday</span>
              <strong>Closed</strong>
            </div>

            <div className="hours-note">
              <FaClock />
              <span>
                Appointment availability may vary. Please call before visiting.
              </span>
            </div>
          </div>
        </div>

        <div className="map-section">
          <iframe
            title="Bethel Medical Centres Map"
            src="https://www.google.com/maps?q=120%20Edgefield%20Place%20Strathmore%20AB%20T1P%200E8&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}