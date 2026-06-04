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
    title: "Walk-In & Family Medical Services",
    text: "Comprehensive primary healthcare services for individuals and families, including diagnosis, treatment, and ongoing medical support.",
    icon: <Stethoscope size={28} />,
    image: familyCareImg,
  },
  {
    title: "Preventive Healthcare & Annual Physicals",
    text: "Routine health assessments, annual physical examinations, wellness checks, and preventive healthcare services.",
    icon: <ShieldPlus size={28} />,
    image: preventiveImg,
  },
  {
    title: "Paediatric Care Services",
    text: "Dedicated healthcare services for infants, children, and adolescents.",
    icon: <Baby size={28} />,
    image: pediatricImg,
  },
  {
    title: "Women’s Health Services",
    text: "Comprehensive healthcare services including routine examinations, cervical screening, family planning, and preventive care.",
    icon: <HeartPulse size={28} />,
    image: womenHealthImg,
  },
  {
    title: "Men’s Health Services",
    text: "Preventive healthcare, routine assessments, health screening, and medical support tailored to men's health needs.",
    icon: <HeartPulse size={28} />,
    image: familyCareImg,
  },
  {
  title: "Elderly Care Services",
  text: "Compassionate healthcare and ongoing support for older adults within our community, promoting healthy ageing, independence, and quality of life.",
  icon: <HeartPulse size={28} />,
  image: familyCareImg,
},
  {
    title: "Chronic Disease Management",
    text: "Ongoing care and support for diabetes, hypertension, asthma, and other long-term health conditions.",
    icon: <Activity size={28} />,
    image: chronicImg,
  },
  {
    title: "General Health & Wellness",
    text: "Supporting overall wellbeing through preventive care, lifestyle guidance, health education, and routine medical assessments.",
    icon: <Activity size={28} />,
    image: preventiveImg,
  },
  {
    title: "Preventive Health Screening",
    text: "Age-appropriate screening programmes and preventive health assessments to support early detection and intervention.",
    icon: <ShieldPlus size={28} />,
    image: preventiveImg,
  },
  {
    title: "Immunisation & Vaccination Services",
    text: "Recommended and routine immunisations, including seasonal influenza vaccines and age-appropriate vaccination programmes.",
    icon: <Syringe size={28} />,
    image: vaccineImg,
  },
  {
    title: "Professional Driver Medical Examinations",
    text: "Driver medical examinations and assessments required for commercial and professional licence holders.",
    icon: <Stethoscope size={28} />,
    image: familyCareImg,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="services-home-section">
      <div className="section">
        <div className="section-heading-center">
          <span className="section-label">Our Services</span>

          <h2>Healthcare Services for Every Stage of Life</h2>

          <p>
            Comprehensive, patient-centred healthcare services supporting
            individuals and families throughout Strathmore and the surrounding
            communities.
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