import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import {
  Stethoscope,
  ShieldPlus,
  Baby,
} from "lucide-react";

const services = [
  {
    title: "Family Medicine & Primary Care",
    description: "Ongoing health management and primary care for individuals and families.",
    icon: <Stethoscope size={34} />,
  },
  {
    title: "Preventive Health & Annual Physicals",
    description: "Routine checkups, wellness exams, screenings, and annual physicals.",
    icon: <ShieldPlus size={34} />,
  },
  {
    title: "Pediatrics & Well-Child Checks",
    description: "Dedicated care for infants, children, and adolescents.",
    icon: <Baby size={34} />,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section home-services">
        <h2>Our Core Services</h2>

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}