import React from "react";
import "../Pages/Exhibition.css";
import banner from "./../../assets/gal1.jpg";
import img1 from "./../../assets/gal2.jpg";
import img2 from "./../../assets/gal3.jpg";
import img3 from "./../../assets/gal4.jpg";

const ExhibitionStands = () => {
  const services = [
    "Custom Stall Design",
    "Double Decker Stand",
    "Country Pavilion",
    "Modular Booth",
    "Shell Scheme",
    "Retail Display",
  ];

  return (
    <div className="details-page">
      {/* HERO */}

      <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay">
          <h1>Exhibition Stand Design</h1>

          <p>
            Creative Exhibition Booth Design & Fabrication Services Across UAE
          </p>

          <button>Get Free Quote</button>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">
        <div className="about-left">
          <h2>Premium Exhibition Stand Solutions</h2>

          <p>
            Our experienced designers and fabrication team create eye-catching
            exhibition booths that maximize your brand visibility and customer
            engagement.
          </p>

          <ul>
            <li>✔ Custom Designed Booths</li>
            <li>✔ Modular Exhibition Stands</li>
            <li>✔ Premium Finishing</li>
            <li>✔ On-time Installation</li>
          </ul>
        </div>

        <div className="about-right">
          <img src={img1} alt="" />
        </div>
      </section>

      {/* FEATURES */}

      <section className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>3D Design</h3>
            <p>Realistic Design Visualization</p>
          </div>

          <div className="feature-card">
            <h3>Fabrication</h3>
            <p>Premium Manufacturing Quality</p>
          </div>

          <div className="feature-card">
            <h3>Installation</h3>
            <p>Professional Team Support</p>
          </div>

          <div className="feature-card">
            <h3>Project Management</h3>
            <p>End-to-End Execution</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services">
        <h2>Our Exhibition Services</h2>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-box" key={index}>
              <h3>{item}</h3>

              <p>
                Professional exhibition solution tailored for your business.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <h2>Let's Build Your Next Exhibition Stand</h2>

        <p>Contact our experts today for a free consultation.</p>

        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default ExhibitionStands;
