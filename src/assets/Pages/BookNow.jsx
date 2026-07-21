import React from "react";
import "./BookNow.css";

const BookNow = () => {
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

      <form className="visit-form">
        <input type="text" placeholder="Full Name" />

        <input type="tel" placeholder="Phone Number" />

        <input type="email" placeholder="Email Address" />

        <input type="date" />

        <input type="time" />

        <select>
          <option>Select Property</option>

          <option>Rural Area Plot</option>

          <option>Urban Area Plot</option>

          <option>Commercial Plot</option>
        </select>

        <textarea rows="5" placeholder="Write Your Message..."></textarea>

        <button>Schedule Site Visit →</button>
      </form>
    </section>
  );
};

export default BookNow;
