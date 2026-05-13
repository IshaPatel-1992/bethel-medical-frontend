import {
  FaPhoneAlt,
  FaUserPlus,
  FaClock,
  FaClinicMedical,
} from "react-icons/fa";

export default function Appointment() {
  return (
    <>
      <section className="page-hero">
        <h1>Appointments & Patient Information</h1>
        <p>
          Bethel Medical Centres is currently accepting new patients.
        </p>
      </section>

      <section className="section">
        <div className="appointment-layout">

          {/* Existing Patients */}
          <div className="appointment-card">
            <div className="service-icon">
              <FaPhoneAlt />
            </div>

            <h2>Book by Phone</h2>

            <p>
              Please contact our clinic directly to schedule an appointment.
            </p>

            <h3 className="appointment-phone">
              587-251-7220
            </h3>

            <p className="small-text">
              Our clinic staff will assist you with appointment availability.
            </p>
          </div>

          {/* New Patients */}
          <div className="appointment-card">
            <div className="service-icon">
              <FaUserPlus />
            </div>

            <h2>New Patients</h2>

            <p>
              We are welcoming new patients and families to our clinic.
            </p>

            <p>
              Please call the clinic for registration and appointment assistance.
            </p>

            <div className="coming-soon">
              Online Registration Coming Soon
            </div>
          </div>

          {/* Clinic Information */}
          <div className="appointment-card highlight">
            <div className="service-icon">
              <FaClinicMedical />
            </div>

            <h2>Clinic Information</h2>

            <p>
              Family medicine, preventive care, annual physicals,
              women’s health, pediatric care, chronic disease management,
              and immunizations.
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