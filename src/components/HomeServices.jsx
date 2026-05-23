import {
  HeartPulse,
  Stethoscope,
  Baby,
  Syringe,
  Activity,
  ShieldPlus,
} from "lucide-react";

import familyCareImg from "../assets/services/edited/bethel-family-medicine-card.webp";
import preventiveImg from "../assets/services/edited/bethel-preventive-health-card.webp";
import pediatricImg from "../assets/services/edited/bethel-pediatric.png";
import womenHealthImg from "../assets/services/edited/bethel-womens-health-card.png";
import chronicImg from "../assets/services/edited/bethel-services-chronic-disease-card.png";
import vaccineImg from "../assets/services/edited/bethel-flu-vaccination-immunization-card.png";

const services = [
  {
    title: "Family Medicine & Primary Care",
    text: "Ongoing health management and primary care for individuals and families of all ages.",
    icon: <Stethoscope size={28} />,
    image: familyCareImg,
  },
  {
    title: "Preventive Health & Annual Physicals",
    text: "Routine checkups, wellness exams, screenings, and annual physicals.",
    icon: <ShieldPlus size={28} />,
    image: preventiveImg,
  },
  {
    title: "Pediatrics & Well-Child Checks",
    text: "Dedicated care for infants, children, and adolescents.",
    icon: <Baby size={28} />,
    image: pediatricImg,
  },
  {
    title: "Women’s Health",
    text: "Annual exams, Pap smears, family planning, and women’s wellness support.",
    icon: <HeartPulse size={28} />,
    image: womenHealthImg,
  },
  {
    title: "Chronic Disease Management",
    text: "Support for diabetes, hypertension, asthma, and other ongoing concerns.",
    icon: <Activity size={28} />,
    image: chronicImg,
  },
  {
    title: "Immunizations & Vaccinations",
    text: "Required and recommended vaccinations including flu, COVID-19, and routine immunizations.",
    icon: <Syringe size={28} />,
    image: vaccineImg,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="services-home-section">
      <div className="section">
        <div className="section-heading-center">
          <span className="section-label">Our Services</span>
          <h2>Comprehensive Healthcare Services</h2>
          <p>
            Medical care designed to support you and your family at every stage
            of life.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}