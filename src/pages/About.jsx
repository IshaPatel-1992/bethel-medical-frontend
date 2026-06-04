
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>About Bethel Medical Centres</h1>
        <p>
          Compassionate, patient-centred healthcare for individuals and families
          in Strathmore and the surrounding communities.
        </p>
      </section>

      <main className="about-wrapper">
        <section className="about-intro">
          <div>
            <span className="section-label">About Our Clinic</span>

            <h2>Your Health and Wellbeing Are Our Priority</h2>

            <p>
              At Bethel Medical Centres, we are committed to providing
              comprehensive, accessible, and patient-centred healthcare for
              individuals and families of all ages.
            </p>

            <p>
              Our team strives to deliver high-quality medical care in a
              welcoming and supportive environment, helping patients achieve
              and maintain long-term health and wellbeing.
            </p>

            <p>
              We believe in building trusted relationships with our patients
              through compassionate care, professional excellence, and a
              commitment to improving overall health outcomes.
            </p>
          </div>

          <div className="about-highlight">
            <span className="highlight-badge">
              Accepting New Patients
            </span>

            <h3>Family Healthcare for Every Stage of Life</h3>

            <p>
              We welcome new patients and families seeking ongoing primary
              healthcare services, preventive care, annual examinations,
              paediatric care, women's health services, chronic disease
              management, immunisations, and health screening programmes.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading-center">
            <span className="section-label">Our Services</span>

            <h2>Comprehensive Healthcare Services</h2>

            <p>
              We provide a broad range of medical services designed to support
              the health and wellbeing of our community.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>Family Medicine</h3>
              <p>
                Ongoing primary healthcare and medical support for patients of
                all ages.
              </p>
            </div>

            <div className="about-card">
              <h3>Preventive Healthcare</h3>
              <p>
                Annual physical examinations, health assessments,
                immunisations, and preventive screening services.
              </p>
            </div>

            <div className="about-card">
              <h3>Paediatric Care</h3>
              <p>
                Dedicated healthcare services for infants, children, and
                adolescents.
              </p>
            </div>

            <div className="about-card">
              <h3>Chronic Disease Management</h3>
              <p>
                Ongoing support for diabetes, hypertension, asthma, and other
                long-term health conditions.
              </p>
            </div>

            <div className="about-card">
              <h3>Women's Health</h3>
              <p>
                Comprehensive healthcare services supporting women's health and
                wellbeing throughout all stages of life.
              </p>
            </div>

            <div className="about-card">
              <h3>Health Screening</h3>
              <p>
                Preventive health assessments and age-appropriate screening
                programmes to support early detection and intervention.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <h2>Book an Appointment Today</h2>

            <p>
              Contact our clinic to arrange an appointment or enquire about
              becoming a new patient.
            </p>
          </div>

          <Link to="/appointment" className="btn primary">
            Book an Appointment
          </Link>
        </section>
      </main>
    </>
  );
}

