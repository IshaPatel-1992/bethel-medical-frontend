// src/pages/Home.jsx
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

const services = [
  { title: "Clinical Services", description: "Comprehensive general and specialist care." },
  { title: "Radiology", description: "Modern imaging with state-of-the-art equipment." },
  { title: "Laboratory", description: "Accurate diagnostics with certified labs." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <h2>Our Core Services</h2>
        <div className="grid">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>
    </>
  );
}
