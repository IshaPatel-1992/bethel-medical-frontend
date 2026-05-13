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
    title: "Primary Care",
    text: "General healthcare, family medicine, routine checkups, and long-term care planning.",
    icon: <Hospital size={34} />,
  },
  {
    title: "Preventive Health",
    text: "Screenings, annual physicals, vaccinations, and wellness assessments.",
    icon: <ShieldCheck size={34} />,
  },
  {
    title: "Pediatric Care",
    text: "Health support for infants, children, and adolescents.",
    icon: <Baby size={34} />,
  },
  {
    title: "Women’s Health",
    text: "Women’s wellness, annual exams, Pap tests, and family planning support.",
    icon: <HeartHandshake size={34} />,
  },
  {
    title: "Chronic Care",
    text: "Ongoing support for diabetes, hypertension, asthma, and related conditions.",
    icon: <Activity size={34} />,
  },
  {
    title: "Immunization Clinic",
    text: "Routine and seasonal vaccinations for eligible patients.",
    icon: <Syringe size={34} />,
  },
];

export default function Departments() {
  return (
    <>
      <section className="page-hero">
        <h1>Our Departments</h1>
        <p>Organized care areas designed to support every stage of health.</p>
      </section>

      <section className="section">
        <div className="service-grid">
          {departments.map((department) => (
            <div className="service-card" key={department.title}>
              <div className="service-icon">
                {department.icon}
              </div>

              <h3>{department.title}</h3>
              <p>{department.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}