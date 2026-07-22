import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import aboutImg from "../assets/aboutImg.jpg";
import personimg from "../assets/personimg.webp";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.jfif";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.webp";
import client5 from "../assets/client5.jpg";

const About = () => {
  const clients = [client1, client2, client3, client4, client5];

  const navigate = useNavigate();

  return (
    <>
      {/* Banner */}

      <section className="about-banner">
        <div className="banner-overlay">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, delectus.</p>
           <p>Lorem ipsum dolor elit. Nobis, delectus.</p>
           
        </div>
      </section>

      {/* Company Introduction */}

      <section className="company">
        <div className="company-image">
          <img src={aboutImg} alt="about-x-img" />
        </div>

        <div className="company-content">
          <span>WHO WE ARE</span>

          <h2>Build X Events & Exhibition</h2>

          <p>
            Build X Events & Exhibition is one of the leading companies
            specializing in exhibition stand design, event production, interior
            solutions and technical services.
          </p>

          <p>
            Our experienced team delivers creative concepts with exceptional
            quality, ensuring every project is completed on time and beyond
            client expectations.
          </p>

          <p>
            With a team of creative designers, engineers and production
            specialists, we transform ideas into impactful brand experiences
            through innovative designs, premium fabrication and professional
            execution.
          </p>

          <button onClick={() => navigate("/contact")}>Contact Us</button>
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
          <p>Projects Completed</p>
        </div>

        <div>
          <h2>150+</h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Professional Team</p>
        </div>
      </section>

      {/* Our Expertise */}

      <section className="expertise">
        <h2>Our Expertise</h2>

        <div className="expertise-box">
          <div className="card">
            <i className="ri-pencil-ruler-fill"></i>

            <h3>Exhibition Design</h3>

            <p>
              Creative and attractive stall designs that represent your brand
              identity.
            </p>
          </div>

          <div className="card">
            <i className="ri-hammer-fill"></i>

            <h3>Stall Fabrication</h3>

            <p>
              High quality fabrication with premium materials and finishing.
            </p>
          </div>

          <div className="card">
            <i className="ri-calendar-event-fill"></i>

            <h3>Event Production</h3>

            <p>
              Complete event management solutions from planning to execution.
            </p>
          </div>

          <div className="card">
            <i className="ri-lightbulb-fill"></i>

            <h3>Technical Solutions</h3>

            <p>Advanced lighting, audio and technical support for events.</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}

      <section className="why">
        <h2>Why Choose Us</h2>

        <div className="why-box">
          <div className="card">
            <h3>
              <i className="ri-award-fill"></i>
            </h3>

            <h4>Quality Work</h4>

            <p>Premium finishing with world-class standards.</p>
          </div>

          <div className="card">
            <h3>
              <i className="ri-flashlight-fill"></i>
            </h3>

            <h4>Fast Delivery</h4>

            <p>Projects completed on schedule every time.</p>
          </div>

          <div className="card">
            <h3>
              <i className="ri-group-3-line"></i>
            </h3>

            <h4>Our Team</h4>

            <p>
              Our dedicated team of experienced professionals delivers
              innovative solutions with precision and excellence.
            </p>
          </div>

          <div className="card">
            <h3>
              <i className="ri-body-scan-line"></i>
            </h3>

            <h4>Factory Capability</h4>

            <p>
              State-of-the-art factory with advanced machinery and strict
              quality control processes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}

      <section className="journey">
        <h2>Our Journey</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>2020</h3>

            <p>
              Company Started with a vision to deliver creative exhibition
              solutions.
            </p>
          </div>

          <div className="timeline-item">
            <h3>2023</h3>

            <p>
              Expanded our services with advanced fabrication and event
              solutions.
            </p>
          </div>

          <div className="timeline-item">
            <h3>2026</h3>

            <p>Successfully completed 500+ projects with trusted clients.</p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}

      <section className="mission">
        <div className="mission-box">
          <h2>Our Mission</h2>

          <p>
            Our mission is to help people find the perfect property with
            complete trust and transparency. We are committed to providing
            high-quality residential and commercial plots at the best locations
            and affordable prices. Our goal is to make property buying simple,
            secure, and hassle-free for every customer. We focus on honest
            dealings, clear documentation, and excellent customer service. By
            understanding our clients' needs, we deliver reliable real estate
            solutions that create long-term value. We strive to build lasting
            relationships through integrity, professionalism, and customer
            satisfaction.
          </p>
        </div>

        <div className="mission-box">
          <h2>Our Vision</h2>

          <p>
            Our vision is to become one of the most trusted and respected real
            estate companies by delivering exceptional value to our customers.
            We aim to create modern, sustainable, and well-planned communities
            that improve the quality of life. Through innovation, transparency,
            and customer-focused services, we strive to make property ownership
            simple and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Our Values */}

      <section className="values">
        <h2>Our Values</h2>

        <div className="values-box">
          <div>
            <h3>Creativity</h3>
            <p>Innovative designs that create memorable experiences.</p>
          </div>

          <div>
            <h3>Quality</h3>
            <p>Premium materials and flawless execution.</p>
          </div>

          <div>
            <h3>Commitment</h3>
            <p>Delivering every project on time.</p>
          </div>

          <div>
            <h3>Trust</h3>
            <p>Building long-term client relationships.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="team">
        <h2>Director</h2>

        <div className="team-card">
          <img src={personimg} alt=" person-img" />

          <h3>Thomas Jhonson</h3>

          <p>
            Our experienced designers, engineers and production experts work
            together to create exceptional exhibition experiences.
          </p>
        </div>
      </section>

      {/* Client Section */}

      <section className="clients">
        <div className="section-title">
          <span>OUR CLIENTS</span>
          <h2>Trusted By Leading Brands</h2>
          <p>
            We are proud to collaborate with businesses and organizations,
            delivering exceptional exhibition and event solutions.
          </p>
        </div>

        <div className="client-slider">
          <div className="client-track">
            {[...clients, ...clients].map((logo, index) => (
              <div className="client-card" key={index}>
                <img src={logo} alt="Client Logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}

      <section className="gallery">
        <div className="gallery-heading">
          <span>OUR PORTFOLIO</span>

          <h2>Our Recent Work</h2>

          <p>
            Discover some of our latest exhibition stands, event setups and
            fabrication projects crafted with creativity and precision.
          </p>
        </div>
        <div className="gallery-btn">
          <button onClick={() => navigate("/project")}>
            View All Projects
            <i className="ri-arrow-right-line"></i>
          </button>
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


