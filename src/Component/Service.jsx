import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Service.css";
import img5 from "../assets/gal1.jpg";
import img6 from "../assets/gal2.jpg";
import img7 from "../assets/gal3.jpg";
import img8 from "../assets/gal4.jpg";
import img9 from "../assets/gal5.jpg";
import img10 from "../assets/gal6.jpg";

const Service = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const nevigate = useNavigate();

  const services = [
  {
    title: "EXIBITION STANDS",
    icon: "ri-building-4-fill",
    desc: "Creative exhibition stall designing and fabrication with quality materials.",
     path: "/services/exhibition",
  },
  {
    title: "FABRICATION WORK",
    icon: "ri-hammer-fill",
    desc: "Custom fabrication services for exhibition stands and display structures.",
     path: "/services/fabrication",
  },
  {
    title: "STYLEFOAM ARTS",
    icon: "ri-shapes-fill",
    desc: "Premium thermocol, foam cutting and decorative branding solutions.",
      path: "/services/stylefoam",
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

                <button onClick={()=> nevigate(item.path)}>Visit</button>

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

               <img
                 src={img}
                 alt={`gallery-${index}`}
                 onClick={() => setSelectedImage(img)}
                 style={{ cursor: "pointer" }}
               />

             </div>

           ))}

        </div>

      </section>
        {selectedImage && (
  <div
    className="image-popup"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="close-btn"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedImage(null);
      }}
    >
      ✕
    </button>

    <img
      src={selectedImage}
      alt="Preview"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </div>
  );
};

export default Service;