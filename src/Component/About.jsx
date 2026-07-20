import React from "react";

import aboutImg from "../assets/aboutImg.jpg"

const About = () => {
  return (
    <>
      {/* Banner */}

      <section className="about-banner">
        <div className="banner-overlay">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Company */}

      <section className="company">

        <div className="company-image">
          <img src={aboutImg} alt="About Build X" />
        </div>

        <div className="company-content">

          <span>WHO WE ARE</span>

          <h2>Build X Events & Exhibition</h2>

          <p>
            Build X Events & Exhibition is one of the leading companies
            specializing in exhibition stand design, event production,
            interior solutions and technical services.
          </p>

          <p>
            Our experienced team delivers creative concepts with exceptional
            quality, ensuring every project is completed on time and beyond
            client expectations.
          </p>

          <button>Contact Us</button>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why">

        <h2>Why Choose Us</h2>

        <div className="why-box">

          <div className="card">
            <h3><i className="ri-award-fill"></i></h3>
            <h4>Quality Work</h4>
            <p>Premium finishing with world-class standards.</p>
          </div>

          <div className="card">
            <h3><i className="ri-flashlight-fill"></i></h3>
            <h4>Fast Delivery</h4>
            <p>Projects completed on schedule every time.</p>
          </div>

          <div className="card">
            <h3><i class="ri-group-3-line"></i></h3>
            <h4>Our Team</h4>
            <p>Our dedicated team of experienced professionals is committed to delivering innovative solutions with precision and excellence.</p>
          </div>

          <div className="card">
            <h3><i class="ri-body-scan-line"></i></h3>
            <h4>Factory Capability</h4>
            <p>State-of-the-art factory with advanced machinery and strict quality control processes.
              Committed to delivering excellence, efficiency, and customer satisfaction in every project..</p>
          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="mission">

        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help people find the perfect property with complete trust and transparency. We are committed to providing high-quality residential and commercial plots at the best locations and affordable prices. Our goal is to make property buying simple, secure, and hassle-free for every customer. We focus on honest dealings, clear documentation, and excellent customer service. By understanding our clients' needs, we deliver reliable real estate solutions that create long-term value. We strive to build lasting relationships through integrity, professionalism, and customer satisfaction. Our vision is to turn every property investment into a successful and rewarding experience.
          </p>
        </div>

        <div className="mission-box">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become one of the most trusted and respected real estate companies by delivering exceptional value to our customers. We aim to create modern, sustainable, and well-planned communities that improve the quality of life. Through innovation, transparency, and customer-focused services, we strive to make property ownership simple and accessible for everyone. We are committed to building long-term relationships based on trust, integrity, and excellence. Our goal is to shape a better future by providing secure investment opportunities and helping people turn their dream of owning property into reality.
          </p>
        </div>

      </section>

      {/* Counter */}

      <section className="counter">

        <div>
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2>150+</h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Team Members</p>
        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Let's Build Something Amazing Together</h2>

        <p>
          Contact us today to discuss your next exhibition or event project.
        </p>

        <button>Get Free Quote</button>

      </section>
    </>
  );
};

export default About;