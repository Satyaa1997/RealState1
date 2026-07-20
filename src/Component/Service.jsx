import React from "react";


import img5 from "../assets/gallery1.jpg";
import img6 from "../assets/gallery2.jfif";
import img7 from "../assets/gallery3.jfif";
import img8 from "../assets/gallery4.jpg";
import img9 from "../assets/gallery5.jfif";
import img10 from "../assets/gallery6.jfif";
import img11 from "../assets/gallery7.jfif";
import img12 from "../assets/gallery8.jfif";

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
    img11,
    img12,
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