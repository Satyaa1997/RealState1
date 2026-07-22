import React from "react";

import "./Service.css";
import img5 from "../assets/gal1.jpg";
import img6 from "../assets/gal2.jpg";
import img7 from "../assets/gal3.jpg";
import img8 from "../assets/gal4.jpg";
import img9 from "../assets/gal5.jpg";
import img10 from "../assets/gal6.jpg";

const Service = () => {
  const services = [
  {
    title: "EXIBITION STANDS",
    icon: "ri-building-4-fill",
    desc: "Creative exhibition stall designing and fabrication with premium quality materials."
  },
  {
    title: "FABRICATION WORK",
    icon: "ri-hammer-fill",
    desc: "Custom fabrication services for exhibition stands and display structures."
  },
  {
    title: "STYLEFOAM ARTS",
    icon: "ri-shapes-fill",
    desc: "Premium thermocol, foam cutting and decorative branding solutions."
  },
  {
    title: "TECHNICAL SERVICES",
    icon: "ri-tools-fill",
    desc: "Professional lighting, LED walls, sound systems and event technical support."
  }
];
  const gallery = [
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <div className="service-page">

      {/* Services */}

      <section className="service-section">

        <h2>Our Service Areas</h2>

        <p className="service-text">
          We provide complete exhibition and event management solutions with
          innovative designs and world-class execution.
        </p>

        <div className="service-grid">

          {services.map((item, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                 <i className={item.icon}></i>
              </div>

              <div className="service-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <button>Visit</button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Gallery */}

      <section className="gallery-section">

        <h2>Service Gallery</h2>

        <p className="gallery-text">
          Explore some of our completed exhibition stalls and event projects.
        </p>

        <div className="gallery-grid">

          {gallery.map((img, index) => (

            <div className="gallery-card" key={index}>

              <img src={img} alt={`gallery-${index}`} />

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Service;