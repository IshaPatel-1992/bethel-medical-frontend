// src/pages/Appointment.jsx
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaClinicMedical,
  FaCalendarCheck,
  FaLaptopMedical,
} from "react-icons/fa";

import heroImage from "../assets/services/banners/shutterstock_2681519119.jpg";

export default function Appointment() {
  return (
    <>
      <section className="appointment-hero">
        <img
          src={heroImage}
          alt="Appointments"
          className="appointment-hero-image"
        />

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

      <section className="section appointment-section">
        <div className="section-heading-center">
          <span className="section-label">Book Your Visit</span>

          <h2>Phone, Email & Online Booking Available</h2>

          <p>
            Please contact the clinic directly or complete the online booking
            form below for appointment requests and patient enquiries.
          </p>
        </div>

        <div className="appointment-layout">
          <div className="about-card appointment-card">
            <div className="about-card-icon">
              <FaPhoneAlt />
            </div>

            <h3>Book by Phone</h3>

            <p>
              Please call our clinic directly to schedule your appointment with
              one of our healthcare providers.
            </p>

            <a href="tel:+15872517220" className="appointment-action-btn phone-btn">
              <FaPhoneAlt />
              Call Clinic
            </a>

            <div className="appointment-contact-info">
              <FaPhoneAlt />
              <span>587-251-7220</span>
            </div>
          </div>

          <div className="about-card appointment-card">
            <div className="about-card-icon">
              <FaEnvelope />
            </div>

            <h3>Book by Email</h3>

            <p>
              Email us for appointment requests, patient enquiries, and clinic
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
              Please call, email, or complete the online form for registration
              assistance.
            </div>
          </div>

          <div className="about-card appointment-card highlight">
            <div className="about-card-icon">
              <FaClinicMedical />
            </div>

            <h3>Clinic Services</h3>

            <p>
              Family medicine, preventive care, annual physicals, women’s
              health, paediatric care, chronic disease management, and
              immunisations.
            </p>

            <div className="clinic-hours">
              <FaClock />
              <span>Please call clinic for hours & availability.</span>
            </div>
          </div>
        </div>

        <div className="online-booking-section">
          <div className="online-booking-header">
            <div>
              <span className="section-label">Online Booking</span>
              <h2>Request an Appointment Online</h2>
              <p>
                Complete the secure online form below and the clinic team will
                review your request.
              </p>
            </div>

            <div className="online-booking-icon">
              <FaLaptopMedical />
            </div>
          </div>

          <div className="online-booking-frame">
            <iframe
              title="Bethel Medical Centres Online Booking Form"
              src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=6R4QidePiUSVsRc25r_ZDmaWKYbkr7FOhHw_SP78vxlUNVQ4NTFNUTBNMks1T0JFOVU5WkFFNDlJRS4u&embed=true"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}