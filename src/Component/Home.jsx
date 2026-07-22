import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Service from "./Service.jsx"
import About2 from "../assets/About2.png";
import gallery1 from "../assets/gallery2.jfif"
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/overview2.webp";
import slide3 from "../assets/slide3.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.avif"
import { useNavigate } from "react-router-dom";

import samsung from "../assets/logo9.png";
import etisalat from "../assets/logo8.png";
import emaar from "../assets/logo2.png";
import dewa from "../assets/logo6.jfif";
import expo from "../assets/logo5.jpg";
import damac from "../assets/logo4.webp";

const Home = () => {
  const slides = [About2, slide1, slide2, slide3, slide5];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const navigate = useNavigate();
  return (
    <>
      {/* Hero Slider */}

      <section className="hero">
        <div
          className="slider"
          style={{ backgroundImage: `url(${slides[current]})` }}
        >
          <div className="overlay">
            <h1>Build X Events & <span className="Exhibition">Exhibition</span></h1>

            <p>
              We Design, Build and Deliver World Class Exhibition Stands & Event
              Solutions.
            </p>

            <button onClick={()=> navigate("/about")}>Get Free Quots</button>
            
          </div>

          <button className="prev" onClick={prevSlide}>
            ❮
          </button>

          <button className="next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      {/* About Section */}
             
      <section className="home-content">
       
        <div className="left">
          <img src={slide2} alt="slide2" />
        </div>

        <div className="right">
          <h2>Company Overview</h2>

          <p>
             Perfect for homes, farmhouses, or future investments.
             Transparent deals, trusted service, and secure documentation.
             Your dream property starts here.
             Experience peaceful surroundings with secure and affordable rural plots.
             Invest today and build a brighter tomorrow for your family.
          </p>

          <button onClick={()=> navigate("/rural")}>Know More</button>
        </div>
      </section>

       <section className="home-content">
         <div className="right">
          <h2>Urban Plots</h2>

          <p>
            Located in well-developed areas, they provide easy access to schools, hospitals, shopping centers, and public transportation.
            These plots are ideal for both residential and commercial purposes.
            With excellent road connectivity and modern infrastructure, urban properties continue to increase in value.
            Every plot is legally verified and comes with clear documentation for a secure purchase.
          </p>

          <button onClick={()=> navigate("/urban")}>Know More</button>
        </div>

        <div className="left">
          <img src={slide6} alt="slide6" />
        </div>

       
      </section>
      <Service />
      
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

      
      {/* Process Section */}

      <section className="process">
  <div className="process-heading">
    <h2>Our Process</h2>
    <p>
      From concept to completion, we follow a structured workflow to ensure
      quality, efficiency, and timely project delivery.
    </p>
  </div>

  <div className="process-timeline">
    <div className="process-step">
      <div className="circle">1</div>
      <h4>Consultation</h4>
    </div>

    <div className="arrow">➜</div>

    <div className="process-step">
      <div className="circle">2</div>
      <h4>Design</h4>
    </div>

    <div className="arrow">➜</div>

    <div className="process-step">
      <div className="circle">3</div>
      <h4>Engineering</h4>
    </div>

    <div className="arrow">➜</div>

    <div className="process-step">
      <div className="circle">4</div>
      <h4>Production</h4>
    </div>

    <div className="arrow">➜</div>

    <div className="process-step">
      <div className="circle">5</div>
      <h4>Installation</h4>
    </div>

    <div className="arrow">➜</div>

    <div className="process-step">
      <div className="circle">6</div>
      <h4>Handover</h4>
    </div>
  </div>
      </section>

      {/* Featured Projects */}

<section className="featured-projects">

  <div className="project-heading">
    <h2>Featured Projects</h2>
    <p>
      Discover some of our latest exhibition, event, and fabrication
      projects delivered with precision and creativity.
    </p>
  </div>

  <div className="project-grid">

    <div className="project-card">
      <img src={slide5} alt="Corporate Exhibition" />
      <div className="project-overlay">
        <h3>Corporate Exhibition</h3>
      </div>
    </div>

    <div className="project-card">
      <img src={slide2} alt="Trade Show Booth" />
      <div className="project-overlay">
        <h3>Trade Show Booth</h3>
      </div>
    </div>

    <div className="project-card">
      <img src={gallery1} alt="Retail Display" />
      <div className="project-overlay">
        <h3>Retail Display</h3>
      </div>
    </div>

    <div className="project-card">
      <img src={slide6} alt="Luxury Event" />
      <div className="project-overlay">
        <h3>Luxury Event</h3>
      </div>
    </div>

    <div className="project-card">
      <img src={slide3} alt="Museum Project" />
      <div className="project-overlay">
        <h3>Museum Project</h3>
      </div>
    </div>

    <div className="project-card">
      <img src={slide1} alt="Custom Sculpture" />
      <div className="project-overlay">
        <h3>Custom Sculpture</h3>
      </div>
    </div>

  </div>

</section>
{/* Client Logos */}

<section className="clients">

  <div className="client-heading">
    <h2>Our Trusted Clients</h2>
    <p>
      Trusted by leading brands across the UAE for delivering premium
      exhibition, event, and production solutions.
    </p>
  </div>

  <div className="logo-slider">

    <div className="logo-track">

      <div className="logo-item"><img src={samsung} alt="Samsung" /></div>
      <div className="logo-item"><img src={etisalat} alt="Etisalat" /></div>
      <div className="logo-item"><img src={emaar} alt="EMAAR" /></div>
      <div className="logo-item"><img src={dewa} alt="DEWA" /></div>
      <div className="logo-item"><img src={expo} alt="Dubai Expo" /></div>
      <div className="logo-item"><img src={damac} alt="DAMAC" /></div>

      {/* Duplicate for Infinite Scroll */}

      <div className="logo-item"><img src={samsung} alt="Samsung" /></div>
      <div className="logo-item"><img src={etisalat} alt="Etisalat" /></div>
      <div className="logo-item"><img src={emaar} alt="EMAAR" /></div>
      <div className="logo-item"><img src={dewa} alt="DEWA" /></div>
      <div className="logo-item"><img src={expo} alt="Dubai Expo" /></div>
      <div className="logo-item"><img src={damac} alt="DAMAC" /></div>

    </div>

  </div>

</section>
    </>
  );
};

export default Home;
