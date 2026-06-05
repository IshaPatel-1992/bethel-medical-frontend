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
import menHealthImg from "../assets/services/edited/bethel-mens-health-services-card.jpg";
import chronicImg from "../assets/services/edited/bethel-services-chronic-disease-card.png";
import vaccineImg from "../assets/services/edited/bethel-flu-vaccination-immunization-card.png";
import ageScreeningImg from "../assets/services/edited/bethel-age-appropriate-screening-card.jpg";
import elderlyCareImg from "../assets/services/edited/bethel-elderly-care-card.jpg";
import driverExamImg from "../assets/services/edited/bethel-driver-medical-examination-card1.jpg";
import acceptingPatientsImg from "../assets/services/edited/bethel-accepting-new-patients-card.jpg";

const services = [
  {
    title: "Accepting New Patients",
    text: "Welcoming new patients and families seeking comprehensive primary healthcare services.",
    icon: <Stethoscope size={28} />,
    image: acceptingPatientsImg,
  },
  {
    title: "Chronic Health Conditions Management",
    text: "Ongoing care and support for diabetes, hypertension, asthma, and other ongoing long-term health conditions.",
    icon: <Activity size={28} />,
    image: chronicImg,
  },
  {
    title: "Preventive Healthcare & Annual Physicals",
    text: "Routine health assessments, annual physical examinations, wellness checks, and preventive healthcare services.",
    icon: <ShieldPlus size={28} />,
    image: preventiveImg,
  },
  {
    title: "Walk-In & Family Medical Services",
    text: "Comprehensive primary healthcare services for individuals and families, including diagnosis, treatment, and ongoing medical care.",
    icon: <Stethoscope size={28} />,
    image: familyCareImg,
  },
  {
    title: "Women's Health Services",
    text: "Comprehensive healthcare services including mammogram referrals, breast ultrasound referrals, routine examinations, cervical screening, family planning, and preventive care.",
    icon: <HeartPulse size={28} />,
    image: womenHealthImg,
  },
  {
    title: "Men's Health Services",
    text: "Preventive healthcare, routine assessments, health screening, and medical support tailored to men's health needs.",
    icon: <HeartPulse size={28} />,
    image: menHealthImg,
  },
  {
    title: "Paediatric Care Services",
    text: "Dedicated healthcare services for infants, children, and adolescents.",
    icon: <Baby size={28} />,
    image: pediatricImg,
  },
  {
    title: "General Health Maintenance",
    text: "Supporting overall wellbeing through preventive care, health education, lifestyle guidance, and routine medical assessments.",
    icon: <Activity size={28} />,
    image: preventiveImg,
  },
  {
    title: "Required Immunisation & Vaccination Linkages",
    text: "Guidance and referrals for required immunisations and vaccinations for school, employment, travel, and public health requirements.",
    icon: <Syringe size={28} />,
    image: vaccineImg,
  },
  {
    title: "Professional Driver Medical Examinations",
    text: "Driver medical examinations and assessments required for commercial and professional licence holders.",
    icon: <Stethoscope size={28} />,
    image: driverExamImg,
  },
  {
    title: "Age-Appropriate Health Screening",
    text: "Preventive health screening programmes designed to support early detection and proactive healthcare management.",
    icon: <ShieldPlus size={28} />,
    image: ageScreeningImg,
  },
  {
    title: "Elderly Care Services",
    text: "Compassionate healthcare and ongoing support for older adults within our community, promoting healthy ageing, independence, and quality of life.",
    icon: <HeartPulse size={28} />,
    image: elderlyCareImg,
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
            individuals and families throughout Strathmore for all Albertans and beyond.
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