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
        <p>We are here to help you and your family with your healthcare needs.</p>
      </section>

      <section className="section">
        <div className="contact-layout">
          <div className="contact-info-card">
            <h2>Bethel Medical Centres</h2>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>120 Edgefield Place, Strathmore, AB T1P 0E8</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>587-251-7220</span>
            </div>

            <div className="contact-item">
              <FaFax />
              <span>833-527-8678</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>info@bethelmedicalcentres.ca</span>
            </div>
          </div>

          <div className="contact-info-card hours-card">
            <h2>Clinic Hours</h2>

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
              <span>Appointment availability may vary. Please call before visiting.</span>
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