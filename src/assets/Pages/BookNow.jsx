import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    property: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.property ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("🎉 Thank You! Your Site Visit has been booked successfully.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      property: "",
      message: "",
    });
  };

  return (
    <section className="visit-section">
      <div className="visit-heading">
        <span>BOOK SITE VISIT</span>

        <h2>Schedule Your Property Visit</h2>

        <p>
          Book a free site visit with our property experts and explore premium
          plots before making your investment decision.
        </p>
      </div>

      <div className="visit-top">
        <div className="visit-box">
          🚗
          <h4>Free Site Visit</h4>
          <p>No visiting charges.</p>
        </div>

        <div className="visit-box">
          👨‍💼
          <h4>Property Expert</h4>
          <p>Professional guidance.</p>
        </div>

        <div className="visit-box">
          📍
          <h4>Prime Location</h4>
          <p>Verified premium plots.</p>
        </div>

        <div className="visit-box">
          🛡️
          <h4>100% Verified</h4>
          <p>Safe & legal property.</p>
        </div>
      </div>

      <form className="visit-form" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={3}
          maxLength={50}
          pattern="[A-Za-z ]+"
          title="Only alphabets are allowed."
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[6-9]{1}[0-9]{9}"
          maxLength="10"
          title="Enter a valid 10-digit mobile number."
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        {/* Time */}
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        {/* Property */}
        <select
          name="property"
          value={formData.property}
          onChange={handleChange}
          required
        >
          <option value="">Select Property</option>
          <option>Rural Area Plot</option>
          <option>Urban Area Plot</option>
          <option>Commercial Plot</option>
        </select>

        {/* Message */}
        <textarea
          rows="5"
          name="message"
          placeholder="Write Your Message..."
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={300}
        ></textarea>

        <button type="submit">Schedule Site Visit →</button>
      </form>
    </section>
  );
};

export default BookNow;