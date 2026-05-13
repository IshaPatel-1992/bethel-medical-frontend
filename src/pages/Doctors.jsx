import {
  FaUserMd,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Doctors() {
  return (
    <>
      <section className="page-hero">
        <h1>Our Doctors</h1>
        <p>Meet the caring healthcare professionals supporting your wellness.</p>
      </section>

      <section className="section">
        <div className="doctor-profile-card">
          <div className="doctor-profile-icon">
            <FaUserMd />
          </div>

          <div className="doctor-profile-content">
            <p className="doctor-label">Specialist Family Physician</p>

            <h2>Dr. Izegebuwa Obuehi</h2>

            <p className="doctor-credentials">
              MD, MB BS, MPH, MRCGP, CCFP
            </p>

            <p>
              Dr. Izegebuwa Obuehi provides compassionate family medicine and
              primary care services for individuals and families.
            </p>

            <div className="doctor-contact-grid">
              <p><FaPhoneAlt /> 587-251-7220</p>
              <p><FaFax /> 833-527-8678</p>
              <p><FaEnvelope /> info@bethelmedicalcentres.ca</p>
              <p><FaMapMarkerAlt /> 120 Edgefield Place, Strathmore, AB T1P 0E8</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}