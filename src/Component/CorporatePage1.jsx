import React from "react";
import { Link } from "react-router-dom";
import "./CorporatePage.css";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

import slide5 from "../assets/gal2.jpg";
import gallery1 from "../assets/gallery1.jpg";

const CorporatePage = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="corporate-hero">

        <div className="hero-left">

          <span className="hero-tag">
            FEATURED PROJECT
          </span>

          <h1>
            Corporate
            <br />
            Exhibition Stand
          </h1>

          <p>
            We create premium exhibition environments that combine
            creativity, engineering and flawless execution to help
            brands stand out at international exhibitions.
          </p>

          <div className="hero-buttons">

            <Link to="/contact" className="primary-btn">
              Start Your Project
            </Link>

            <a href="#gallery" className="secondary-btn">
              View Gallery
            </a>

          </div>

          {/* Floating Statistics */}

          <div className="hero-stats">

            <div className="hero-stat-card">

              <h2>150+</h2>

              <span>Projects</span>

            </div>

            <div className="hero-stat-card">

              <h2>12+</h2>

              <span>Years</span>

            </div>

            <div className="hero-stat-card">

              <h2>98%</h2>

              <span>Success Rate</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="hero-right">

          <div className="hero-image-box">

            <img src={slide5} alt="Corporate Exhibition" />

          </div>

        </div>

      </section>

      {/* ================= BREADCRUMB ================= */}

      <section className="breadcrumb">

        <Link to="/">Home</Link>

        <span>/</span>

        <Link to="/projects">Projects</Link>

        <span>/</span>

        <p>Corporate Exhibition</p>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="project-overview">

        <div className="overview-left">

          <span className="section-subtitle">

            PROJECT OVERVIEW

          </span>

          <h2>

            Transforming Ideas Into
            Exceptional Exhibition Experiences

          </h2>

          <p>

            Our Corporate Exhibition project showcases the perfect
            balance of creativity, functionality and engineering.
            Every detail was designed to attract visitors while
            strengthening brand identity.

          </p>

          <p>

            From concept visualization to fabrication and final
            installation, Build X handled every stage with precision,
            delivering an exhibition stand that exceeded client
            expectations.

          </p>

          {/* Features */}

          <div className="feature-list">

            <div className="feature-item">
              ✔ Premium Fabrication
            </div>

            <div className="feature-item">
              ✔ Custom 3D Design
            </div>

            <div className="feature-item">
              ✔ LED Integration
            </div>

            <div className="feature-item">
              ✔ On-site Installation
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="overview-right">

          <div className="info-card">

            <h3>Project Information</h3>

            <div className="info-item">

              <h5>Client</h5>

              <p>Corporate Brand</p>

            </div>

            <div className="info-item">

              <h5>Location</h5>

              <p>Dubai, UAE</p>

            </div>

            <div className="info-item">

              <h5>Category</h5>

              <p>Exhibition Stand</p>

            </div>

            <div className="info-item">

              <h5>Area</h5>

              <p>250 Sq.m</p>

            </div>

            <div className="info-item">

              <h5>Duration</h5>

              <p>4 Weeks</p>

            </div>

            <div className="info-item">

              <h5>Services</h5>

              <p>Design • Production • Installation</p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="project-stats">

        <div className="stat-box">

          <h2>250+</h2>

          <span>Sq. Meter Built</span>

        </div>

        <div className="stat-box">

          <h2>35</h2>

          <span>Production Days</span>

        </div>

        <div className="stat-box">

          <h2>45+</h2>

          <span>Experts Involved</span>

        </div>

        <div className="stat-box">

          <h2>100%</h2>

          <span>Client Satisfaction</span>

        </div>

      </section>

      {/* ================= SHOWCASE ================= */}

      <section className="showcase">

        <div className="showcase-left">

          <img
            src={gallery1}
            alt="Project Showcase"
          />

        </div>

        <div className="showcase-right">

          <span className="section-subtitle">
            HIGHLIGHT
          </span>

          <h2>
            Built To Impress,
            Engineered To Perform
          </h2>

          <p>

            Every structure was fabricated using premium materials,
            advanced manufacturing techniques and expert craftsmanship
            to deliver a flawless exhibition experience.

          </p>

          <Link
            to="/contact"
            className="primary-btn"
          >

            Request Similar Project

          </Link>

        </div>

      </section>
            {/* ================= PROCESS ================= */}

      <section className="process-section">

        <div className="section-heading">

          <span>WORKFLOW</span>

          <h2>Our Project Execution Process</h2>

          <p>
            Every exhibition project follows a structured workflow that
            ensures creativity, precision and timely delivery.
          </p>

        </div>

        <div className="process-timeline">

          <div className="timeline-item">

            <div className="timeline-icon">
              <i className="ri-discuss-line"></i>
            </div>

            <h3>Consultation</h3>

            <p>
              Understanding business goals and exhibition requirements.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <i className="ri-pencil-ruler-2-line"></i>
            </div>

            <h3>Design</h3>

            <p>
              3D concepts, branding strategy and stand visualization.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <i className="ri-tools-line"></i>
            </div>

            <h3>Production</h3>

            <p>
              Fabrication using premium materials and quality control.
            </p>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <i className="ri-building-4-line"></i>
            </div>

            <h3>Installation</h3>

            <p>
              Professional installation with complete finishing.
            </p>

          </div>

        </div>

      </section>

      {/* ================= RELATED PROJECTS ================= */}

      <section className="related-projects">

        <div className="section-heading">

          <span>EXPLORE MORE</span>

          <h2>Related Projects</h2>

        </div>

        <div className="related-wrapper">

          <Link to="/project/luxury-event" className="related-card">

            <img src={slide2} alt="" />

            <div className="related-content">

              <span>Luxury Event</span>

              <h3>Premium Event Setup</h3>

            </div>

          </Link>

          <Link to="/project/trade-show" className="related-card">

            <img src={slide3} alt="" />

            <div className="related-content">

              <span>Trade Show</span>

              <h3>Trade Show Booth</h3>

            </div>

          </Link>

          <Link to="/project/retail-display" className="related-card">

            <img src={gallery1} alt="" />

            <div className="related-content">

              <span>Retail</span>

              <h3>Retail Display</h3>

            </div>

          </Link>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="project-cta">

        <div className="cta-content">

          <span>LET'S BUILD SOMETHING AMAZING</span>

          <h2>
            Ready To Create Your
            Next Exhibition Project?
          </h2>

          <p>
            From concept design to production and installation,
            Build X Production delivers complete exhibition
            solutions tailored to your brand.
          </p>

          <div className="cta-buttons">

            <Link
              to="/contact"
              className="primary-btn"
            >
              Request A Quote
            </Link>

            <Link
              to="/projects"
              className="secondary-btn"
            >
              View More Projects
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};

export default CorporatePage;