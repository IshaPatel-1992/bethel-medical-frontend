import { Link } from "react-router-dom";

const benefits = [
  "Accepting New Patients and Families",
  "Comprehensive Family Medical Services",
  "Preventive Healthcare and Annual Physical Examinations",
  "Women’s Health and Men’s Health Services",
  "Compassionate Elderly Care and Community Support",
  "Paediatric Care and Adolescent Health Support",
  "Chronic Health Conditions Management and Ongoing Care",
  "Immunisation and Vaccination Services",
  "Professional Driver Medical Examinations",
];

export default function HomeAbout() {
  return (
    <section id="about" className="about-home-section">
      <div className="about-wrapper">
        <section className="about-intro">
          <div>
            <span className="section-label">About Us</span>

            <h2>Your Health and Wellbeing Are Our Priority</h2>

            <p>
              Bethel Medical Centres provides modern, reliable, and
              patient-centred healthcare for individuals and families of all
              ages.
            </p>

            <p>
              Our goal is to make healthcare easier to access, comfortable to
              experience, and supportive for long-term health and wellbeing.
            </p>

            <Link to="/appointment" className="btn primary">
              Book an Appointment
            </Link>
          </div>

          <div className="about-highlight">
            <span className="highlight-badge">Now Welcoming Families</span>

            <h3>Accepting New Patients</h3>

            <p>
              We welcome you and your family for primary care, preventive
              healthcare, annual physical examinations, paediatric care,
              women&apos;s health services, chronic health conditions management, and
              immunisations.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading-center about-heading-center">
            <span className="section-label">Why Choose Us</span>

            <h2>Trusted Healthcare Close to Home</h2>

            <p>
              At <span className="brand-highlight">BETHEL MEDICAL CENTRES</span>, we provide compassionate, accessible,
              and patient-centred healthcare for individuals and families
              throughout Strathmore and the surrounding communities.
            </p>
          </div>

          <div className="about-benefits">
            {benefits.map((item) => (
              <div className="benefit-item" key={item}>
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <h2>Book an Appointment Today</h2>
            <p>Call us or visit our appointment page to get started.</p>
          </div>

          <Link to="/appointment" className="btn primary">
            Book an Appointment
          </Link>
        </section>
      </div>
    </section>
  );
}