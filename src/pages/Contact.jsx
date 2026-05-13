import { FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you and your family with your healthcare needs.</p>
      </section>

      <section className="section">
        <div className="contact-layout">
          <div className="contact-card">
            <h2>Bethel Medical Centres</h2>

            <p><FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB T1P 0E8</p>
            <p><FaPhoneAlt /> 587-251-7220</p>
            <p><FaFax /> 833-527-8678</p>
            <p><FaEnvelope /> info@bethelmedicalcentres.ca</p>
          </div>

          <div className="contact-card">
            <h2>Clinic Hours</h2>
            <p>Monday – Friday: Please call clinic</p>
            <p>Saturday: Please call clinic</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="map-card">
            <iframe
              title="Bethel Medical Centres Map"
              src="https://www.google.com/maps?q=120%20Edgefield%20Place%20Strathmore%20AB%20T1P%200E8&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}