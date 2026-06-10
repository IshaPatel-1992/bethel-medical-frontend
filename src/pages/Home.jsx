import SEO from "../components/SEO.jsx";
import Hero from "../components/Hero.jsx";
import HomeAbout from "../components/HomeAbout.jsx";
import HomeServices from "../components/HomeServices.jsx";
import HomeDepartments from "../components/HomeDepartments.jsx";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Bethel Medical Centres",
    url: "https://bethelmedicalcentres.ca/",
    telephone: "+1-587-251-7220",
    faxNumber: "+1-833-527-8678",
    email: "info@bethelmedicalcentres.ca",
    image: "https://bethelmedicalcentres.ca/og-image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 Edgefield Place",
      addressLocality: "Strathmore",
      addressRegion: "AB",
      postalCode: "T1P 0E8",
      addressCountry: "CA",
    },
    medicalSpecialty: [
      "Family Medicine",
      "Primary Care",
      "Preventive Healthcare",
      "Paediatric Care",
      "Women’s Health",
      "Men’s Health",
      "Chronic Disease Management",
    ],
    openingHours: "Mo-Fr 09:30-16:00",
    areaServed: [
      "Strathmore",
      "Chestermere",
      "Wheatland County",
      "Calgary",
      "Alberta",
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Family Medical Services" },
      { "@type": "MedicalProcedure", name: "Preventive Healthcare and Annual Physicals" },
      { "@type": "MedicalProcedure", name: "Paediatric Care Services" },
      { "@type": "MedicalProcedure", name: "Women’s Health Services" },
      { "@type": "MedicalProcedure", name: "Men’s Health Services" },
      { "@type": "MedicalProcedure", name: "Chronic Disease Management" },
      { "@type": "MedicalProcedure", name: "Immunisation and Vaccination Services" },
      { "@type": "MedicalProcedure", name: "Professional Driver Medical Examinations" },
      { "@type": "MedicalProcedure", name: "Preventive Health Screening" },
    ],
  };

  return (
    <>
      <SEO
        title="Bethel Medical Centres | Family Doctors in Strathmore, AB"
        description="Bethel Medical Centres in Strathmore, Alberta offers family medicine, walk-in care, preventive health, paediatric care, women’s health, chronic disease management, immunisations, and driver medical examinations."
        path="/"
        schema={schema}
      />

      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeDepartments />
    </>
  );
}