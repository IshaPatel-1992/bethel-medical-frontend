import {
  Hospital,
  ShieldCheck,
  HeartHandshake,
  Baby,
  Activity,
  Syringe,
} from "lucide-react";

const departments = [
  {
    title: "Walk-In & Family Medical Services",
    text: "Comprehensive primary healthcare services for individuals and families, including diagnosis, treatment, and ongoing medical care.",
    icon: <Hospital size={34} />,
  },
  {
    title: "Preventive Healthcare & Annual Physicals",
    text: "Routine health assessments, annual physical examinations, wellness checks, and preventive healthcare services.",
    icon: <ShieldCheck size={34} />,
  },
  {
    title: "Paediatric Care Services",
    text: "Dedicated healthcare services for infants, children, and adolescents to support healthy growth and development.",
    icon: <Baby size={34} />,
  },
  {
    title: "Women's Health Services",
    text: "Comprehensive healthcare services including mammograms, breast ultrasound referrals, routine examinations, cervical screening, family planning, and preventive care.",
    icon: <HeartHandshake size={34} />,
  },
  {
    title: "Men's Health Services",
    text: "Preventive healthcare, routine assessments, health screening, and medical support tailored to men's health needs.",
    icon: <HeartHandshake size={34} />,
  },
  {
  title: "Elderly Care Services",
  text: "Compassionate healthcare and ongoing support for older adults within our community, promoting healthy ageing, independence, and overall wellbeing.",
  icon: <HeartHandshake size={34} />,
},
  {
    title: "Chronic Disease Management",
    text: "Ongoing support and management for diabetes, hypertension, asthma, and other long-term health conditions.",
    icon: <Activity size={34} />,
  },
  {
    title: "General Health & Wellness",
    text: "Supporting overall wellbeing through preventive care, health education, lifestyle guidance, and routine medical assessments.",
    icon: <ShieldCheck size={34} />,
  },
  {
    title: "Preventive Health Screening",
    text: "Age-appropriate screening programmes and preventive health assessments to support early detection and intervention.",
    icon: <ShieldCheck size={34} />,
  },
  {
    title: "Immunisation & Vaccination Services",
    text: "Routine and recommended immunisations, including seasonal influenza vaccines and age-appropriate vaccination programmes.",
    icon: <Syringe size={34} />,
  },
  {
    title: "Professional Driver Medical Examinations",
    text: "Driver medical examinations and assessments required for commercial and professional licence holders.",
    icon: <Hospital size={34} />,
  },
];

export default function HomeDepartments() {
  return (
    <section id="departments" className="departments-home-section">
      <div className="section">
        <div className="section-heading-center">
          <span className="section-label">Care Areas</span>
          <h2>Organised Care Areas</h2>
          <p>
            Our care areas help patients easily understand the services
            available at Bethel Medical Centres.
          </p>
        </div>

        <div className="department-list">
          {departments.map((department) => (
            <div className="department-row" key={department.title}>
              <div className="department-row-icon">{department.icon}</div>

              <div>
                <h3>{department.title}</h3>
                <p>{department.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}