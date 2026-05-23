import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaClinicMedical,
} from "react-icons/fa";

export default function Appointment() {
  return (
    <>
      <section className="page-hero">
        <h1>Appointments & Patient Information</h1>
        <p>Bethel Medical Centres is currently accepting new patients.</p>
      </section>

      <section className="section appointment-section">
        <div className="section-heading-center">
          <span className="section-label">Book Your Visit</span>
          <h2>Phone & Email Booking Available</h2>
          <p>No online form is required. Please contact the clinic directly.</p>
        </div>

        <div className="appointment-layout">
          <div className="about-card appointment-card">
            <div className="about-card-icon"><FaPhoneAlt /></div>
            <h3>Book by Phone</h3>
            <p>Please call our clinic to schedule your appointment.</p>

            <a href="tel:15872517220" className="appointment-action-btn phone-btn">
              <FaPhoneAlt />
              Call 587-251-7220
            </a>
          </div>

          <div className="about-card appointment-card">
            <div className="about-card-icon"><FaEnvelope /></div>
            <h3>Book by Email</h3>
            <p>Email us for appointment inquiries and clinic information.</p>
            <a
              href="mailto:info@bethelmedicalcentres.ca"
              className="appointment-action-btn email-btn"
            >
              <FaEnvelope />
              Email Clinic
            </a>
          </div>

          <div className="about-card appointment-card highlight">
            <div className="about-card-icon"><FaUserPlus /></div>
            <h3>New Patients Welcome</h3>
            <p>We are welcoming new patients and families to our clinic.</p>
            <div className="coming-soon">Please call or email for registration assistance.</div>
          </div>

          <div className="about-card appointment-card highlight">
            <div className="about-card-icon"><FaClinicMedical /></div>
            <h3>Clinic Services</h3>
            <p>
              Family medicine, preventive care, annual physicals, women’s health,
              pediatric care, chronic disease management, and immunizations.
            </p>
            <div className="clinic-hours">
              <FaClock />
              <span>Please call clinic for hours & availability.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}