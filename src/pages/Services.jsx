import {
  HeartPulse,
  Stethoscope,
  Baby,
  Syringe,
  Activity,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    title: "Family Medicine & Primary Care",
    text: "Ongoing health management and primary care for individuals and families of all ages.",
    icon: <Stethoscope size={34} />,
  },
  {
    title: "Preventive Health & Annual Physicals",
    text: "Routine checkups, wellness exams, screenings, and annual physicals.",
    icon: <ShieldPlus size={34} />,
  },
  {
    title: "Pediatrics & Well-Child Checks",
    text: "Dedicated care for infants, children, and adolescents.",
    icon: <Baby size={34} />,
  },
  {
    title: "Women’s Health",
    text: "Annual exams, Pap smears, family planning, and women’s wellness support.",
    icon: <HeartPulse size={34} />,
  },
  {
    title: "Chronic Disease Management",
    text: "Support for diabetes, hypertension, asthma, and other ongoing concerns.",
    icon: <Activity size={34} />,
  },
  {
    title: "Immunizations & Vaccinations",
    text: "Required and recommended vaccinations including flu, COVID-19, and routine immunizations.",
    icon: <Syringe size={34} />,
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive healthcare services for you and your family.</p>
      </section>

      <section className="section">
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}