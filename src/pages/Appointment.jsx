// src/pages/Appointment.jsx
import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // later: send to backend API
    console.log("Appointment request:", form);
    alert("Your appointment request has been submitted.");
  }

  return (
    <section className="section">
      <h1>Book an Appointment</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Department
          <select name="department" value={form.department} onChange={handleChange} required>
            <option value="">Select department</option>
            <option value="clinical">Clinical Services</option>
            <option value="radiology">Radiology</option>
            <option value="laboratory">Laboratory</option>
          </select>
        </label>
        <label>
          Preferred Date
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>
        <label>
          Additional Details
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <button type="submit" className="btn primary">Submit</button>
      </form>
    </section>
  );
}
