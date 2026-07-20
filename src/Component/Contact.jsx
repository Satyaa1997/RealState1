import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you. Fill out the form and our team will
          contact you shortly.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-form">

          <h3>Send Your Inquiry</h3>

          <form>

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="tel" placeholder="Phone Number" />

            <input type="text" placeholder="City" />

            <select>
              <option>Select Property</option>
              <option>Residential Plot</option>
              <option>Commercial Plot</option>
              <option>Farm House</option>
              <option>Villa</option>
            </select>

            <textarea
              rows="6"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">
              Send Inquiry
            </button>

          </form>

        </div>

        {/* Right Side */}

        <div className="contact-info">

          <div className="info-box">

            <i className="ri-phone-fill"></i>

            <div>
              <h4>Call Us</h4>
              <p>+91 9876543210</p>
            </div>

          </div>

          <div className="info-box">

            <i className="ri-whatsapp-fill"></i>

            <div>
              <h4>WhatsApp</h4>
              <p>Chat with our sales team</p>
            </div>

          </div>

          <div className="info-box">

            <i className="ri-mail-fill"></i>

            <div>
              <h4>Email</h4>
              <p>info@auctech.com</p>
            </div>

          </div>

          <div className="info-box">

            <i className="ri-map-pin-2-fill"></i>

            <div>
              <h4>Office Address</h4>
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>

          </div>

          <div className="info-box">

            <i className="ri-time-fill"></i>

            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
            </div>

          </div>

          <div className="map-box">

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Lucknow&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;