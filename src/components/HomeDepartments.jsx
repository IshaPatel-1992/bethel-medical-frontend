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

export default function HomeDepartments() {
  return (
    <section id="departments" className="departments-home-section">
      <div className="section">
        <div className="section-heading-center">
          <span className="section-label">Departments</span>
          <h2>Organized Care Areas</h2>
          <p>
            Our departments help patients easily understand the care available
            at Bethel Medical Centres.
          </p>
        </div>

        <div className="department-list">
          {departments.map((department) => (
            <div className="department-row" key={department.title}>
              <div className="department-row-icon">
                {department.icon}
              </div>

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