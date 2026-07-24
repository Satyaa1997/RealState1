import React from "react";
import "../Pages/Fabrication.css";

import banner from "./../../assets/gal3.jpg";
import img1 from "./../../assets/gal5.jpg";
import img2 from "./../../assets/project6.jfif";
import img3 from "./../../assets/project5.jfif";

const FabricationWork = () => {
  const services = [
    "Steel Fabrication",
    "Wood Fabrication",
    "Aluminium Structures",
    "Custom Booth Manufacturing",
    "CNC & Laser Cutting",
    "Installation & Finishing",
  ];

  return (
    <div className="details-page">
      {/* Hero */}

      <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay">
          <h1>Fabrication Work</h1>

          <p>
            Premium Fabrication Solutions for Exhibitions, Events & Commercial
            Spaces.
          </p>

          <button>Get Free Quote</button>
        </div>
      </section>

      {/* About */}

      <section className="about-section">
        <div className="about-left">
          <h2>Professional Fabrication Services</h2>

          <p>
            We manufacture high-quality exhibition booths, display stands,
            kiosks, retail interiors and custom branding structures using
            premium materials and advanced machinery.
          </p>

          <ul>
            <li>✔ Steel & Aluminium Fabrication</li>
            <li>✔ Wood & MDF Manufacturing</li>
            <li>✔ CNC Precision Cutting</li>
            <li>✔ Powder Coating & Finishing</li>
          </ul>
        </div>

        <div className="about-right">
          <img src={img1} alt="" />
        </div>
      </section>

      {/* Why Choose */}

      <section className="features">
        <h2>Why Choose Our Fabrication</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Premium Materials</h3>
            <p>High-quality raw materials with long-lasting durability.</p>
          </div>

          <div className="feature-card">
            <h3>Modern Machinery</h3>
            <p>Latest CNC, laser cutting & precision fabrication.</p>
          </div>

          <div className="feature-card">
            <h3>Expert Team</h3>
            <p>Experienced engineers and fabrication specialists.</p>
          </div>

          <div className="feature-card">
            <h3>On-Time Delivery</h3>
            <p>Projects completed within committed timelines.</p>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="services">
        <h2>Our Fabrication Services</h2>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-box" key={index}>
              <h3>{item}</h3>

              <p>
                Professional fabrication service with premium finishing and
                quality assurance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}

      <section className="gallery">
        <h2>Recent Fabrication Projects</h2>

        <div className="gallery-grid">
          <div className="gallery-card">
            <img src={img1} alt="" />
          </div>

          <div className="gallery-card">
            <img src={img2} alt="" />
          </div>

          <div className="gallery-card">
            <img src={img3} alt="" />
          </div>
          <div className="gallery-card">
            <img src={img1} alt="" />
          </div>

          <div className="gallery-card">
            <img src={img2} alt="" />
          </div>

          <div className="gallery-card">
            <img src={img3} alt="" />
          </div>
          
        </div>
      </section>

      {/* Process */}

      <section className="process-section">
        <h2>Our Fabrication Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Planning</h3>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Design</h3>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Manufacturing</h3>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Quality Check</h3>
          </div>

          <div className="process-card">
            <span>05</span>
            <h3>Installation</h3>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <h2>Need Custom Fabrication?</h2>

        <p>
          Contact our fabrication experts today and get a customized quotation
          for your next project.
        </p>

        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default FabricationWork;
