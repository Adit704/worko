import React, { useState } from "react";
import './ReferralForm.css';

function ReferralForm({ onAddCandidate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      const file = files[0];
      if (file && file.type !== "application/pdf") {
        alert("Please upload only PDF files.");
        return;
      }
      setFormData({ ...formData, resume: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCandidate(formData);
    setFormData({ name: "", email: "", phone: "", jobTitle: "", resume: null });
  };

  return (
    <form className="referral-form" onSubmit={handleSubmit}>
      <h2>Refer a Candidate</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Candidate Name" required />
      <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" required />
      <input name="resume" type="file" accept="application/pdf" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReferralForm;