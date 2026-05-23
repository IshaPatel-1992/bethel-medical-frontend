import { Link } from "react-router-dom";
import { Stethoscope, ShieldPlus, Baby, Activity } from "lucide-react";

const aboutCards = [
  {
    title: "Family Medicine",
    text: "Ongoing healthcare support for patients of all ages.",
    icon: <Stethoscope size={30} />,
  },
  {
    title: "Preventive Care",
    text: "Annual physicals, screenings, vaccinations, and wellness exams.",
    icon: <ShieldPlus size={30} />,
  },
  {
    title: "Children’s Health",
    text: "Dedicated care for infants, children, and adolescents.",
    icon: <Baby size={30} />,
  },
  {
    title: "Chronic Care",
    text: "Support for diabetes, hypertension, asthma, and ongoing conditions.",
    icon: <Activity size={30} />,
  },
];

export default function HomeAbout() {
  return (
    <section id="about" className="about-home-section">
      <div className="about-wrapper">
        <section className="about-intro">
          <div>
            <span className="section-label">About Us</span>

            <h2>Your Health is Our Priority</h2>

            <p>
              Bethel Medical Centres provides modern, reliable, and
              patient-centered healthcare for individuals and families of all
              ages.
            </p>

            <p>
              Our goal is to make healthcare easier to access, comfortable to
              experience, and supportive for long-term wellness.
            </p>

            <Link to="/appointment" className="btn primary">
              Book Appointment
            </Link>
          </div>

          <div className="about-highlight">
            <span className="highlight-badge">Now Welcoming Families</span>

            <h3>Accepting New Patients</h3>

            <p>
              We welcome you and your family for primary care, preventive care,
              annual physicals, children’s health, women’s health, chronic
              disease management, and immunizations.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading-center">
            <span className="section-label">What We Offer</span>
            <h2>Care for Every Stage of Life</h2>
          </div>

          <div className="about-cards">
            {aboutCards.map((card) => (
              <div className="about-card" key={card.title}>
                <div className="about-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <h2>Book Your Appointment Today</h2>
            <p>Call us or visit our appointment page to get started.</p>
          </div>

          <Link to="/appointment" className="btn primary">
            Book Appointment
          </Link>
        </section>
      </div>
    </section>
  );
}