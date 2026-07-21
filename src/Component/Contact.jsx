import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {


  const navigate = useNavigate();

  return (
    <section className="contact-section">

      {/* Heading */}

      <div className="contact-heading">
        <span className="contact-tag">Get In Touch</span>

        <h2>Let's Discuss Your Dream Property</h2>

        <p>
          Have questions about our plots or projects? Fill out the form below
          and our team will contact you shortly with the best investment
          options.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-form-box">

          <h3>Send Your Inquiry</h3>

          <form className="contact-form">

            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="City" />
            </div>

            <select>
              <option>Select Property</option>
              <option>Rural Area Plot</option>
              <option>Urban Area Plot</option>
              <option>Commercial Plot</option>
              <option>Farm Land</option>
            </select>

            <textarea
              rows="5"
              placeholder="Write Your Message..."
            ></textarea>

            <button type="submit">
              Send Inquiry
            </button>

          </form>

        </div>

        {/* Right Side */}

        <div className="contact-right">

          <div className="contact-card">

            <div className="icon">
              <i className="ri-phone-fill"></i>
            </div>

            <div className="text">
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon">
              <i className="ri-mail-fill"></i>
            </div>

            <div className="text">
              <h4>Email</h4>
              <p>info@buildx.com</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon">
              <i className="ri-map-pin-2-fill"></i>
            </div>

            <div className="text">
              <h4>Office</h4>
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon">
              <i className="ri-time-fill"></i>
            </div>

            <div className="text">
              <h4>Working Hours</h4>
              <p>Mon - Sat : 9 AM - 7 PM</p>
            </div>

          </div>

          {/* Map */}

          <div className="map-box">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Lucknow&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

      {/* Bottom CTA */}

    </section>
  );
};

export default Contact;