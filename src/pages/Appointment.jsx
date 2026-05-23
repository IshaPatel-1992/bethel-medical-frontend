import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaClinicMedical,
  FaCalendarCheck,
} from "react-icons/fa";

//import heroVideo from "../assets/services/banners/1090224597-preview.mp4";
// Optional image instead of video
 import heroImage from "../assets/services/banners/shutterstock_2681519119.jpg";

export default function Appointment() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="appointment-hero">
        {/* <video className="appointment-hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video> */}

        {/* IMAGE OPTION */}
         <img src={heroImage} alt="Appointments" className="appointment-hero-image" /> 

        <div className="appointment-hero-overlay" />

        <div className="appointment-hero-content">
          <span>
            <FaCalendarCheck />
            Book Your Visit
          </span>

          <h1>Appointments & Patient Information</h1>

          <p>
            Bethel Medical Centres is currently accepting new patients and
            families for compassionate primary healthcare services.
          </p>
        </div>
      </section>

      {/* APPOINTMENT CONTENT */}
      <section className="section appointment-section">
        <div className="section-heading-center">
          <span className="section-label">Book Your Visit</span>

          <h2>Phone & Email Booking Available</h2>

          <p>
            No online form is required. Please contact the clinic directly for
            appointments and patient inquiries.
          </p>
        </div>

        <div className="appointment-layout">
          {/* PHONE */}
          <div className="about-card appointment-card">
            <div className="about-card-icon">
              <FaPhoneAlt />
            </div>

            <h3>Book by Phone</h3>

            <p>
              Please call our clinic directly to schedule your appointment with
              one of our healthcare providers.
            </p>

            <a
              href="tel:15872517220"
              className="appointment-action-btn phone-btn"
            >
              <FaPhoneAlt />
              Call Clinic
            </a>

            <div className="appointment-contact-info">
              <FaPhoneAlt />
              <span>587-251-7220</span>
            </div>
          </div>

          {/* EMAIL */}
          <div className="about-card appointment-card">
            <div className="about-card-icon">
              <FaEnvelope />
            </div>

            <h3>Book by Email</h3>

            <p>
              Email us for appointment requests, patient inquiries, and clinic
              information.
            </p>

            <a
              href="mailto:info@bethelmedicalcentres.ca"
              className="appointment-action-btn email-btn"
            >
              <FaEnvelope />
              Email Clinic
            </a>

            <div className="appointment-contact-info">
              <FaEnvelope />
              <span>info@bethelmedicalcentres.ca</span>
            </div>
          </div>

          {/* NEW PATIENTS */}
          <div className="about-card appointment-card highlight">
            <div className="about-card-icon">
              <FaUserPlus />
            </div>

            <h3>New Patients Welcome</h3>

            <p>
              We are welcoming new patients and families to our clinic for
              ongoing primary healthcare services.
            </p>

            <div className="coming-soon">
              Please call or email for registration assistance.
            </div>
          </div>

          {/* SERVICES */}
          <div className="about-card appointment-card highlight">
            <div className="about-card-icon">
              <FaClinicMedical />
            </div>

            <h3>Clinic Services</h3>

            <p>
              Family medicine, preventive care, annual physicals, women’s
              health, pediatric care, chronic disease management, and
              immunizations.
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