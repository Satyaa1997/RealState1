import React from "react";
import "./../Pages/Capabilities.css";

import residential from "./../../assets/slide1.jpg";
import commercial from "./../../assets/overview2.webp";
import rural from "./../../assets/rural2.avif";
import urban from "./../../assets/urban3.webp";
import legal from "./../../assets/gal2.jpg";
import investment from "./../../assets/gal5.jpg";
import development from "./../../assets/slide2.jpg";
import visit from "./../../assets/work3.jpg";
import support from "./../../assets/gallery1.jpg";
import payment from "./../../assets/gal4.jpg";
import secure from "./../../assets/gal5.jpg";
import appreciation from "./../../assets/gal6.jpg";

const capabilities = [
  {
    title: "Residential Plots",
    image: residential,
    desc: "Premium residential plots designed for families and long-term investors.",
  },
  {
    title: "Commercial Plots",
    image: commercial,
    desc: "Prime commercial land suitable for shops, offices, and business spaces.",
  },
  {
    title: "Rural Land Development",
    image: rural,
    desc: "Farmhouse plots, agricultural land, and eco-friendly development projects.",
  },
  {
    title: "Urban Property Solutions",
    image: urban,
    desc: "Well-connected urban plots with modern infrastructure and excellent accessibility.",
  },
  {
    title: "Legal Documentation",
    image: legal,
    desc: "100% verified properties with clear titles and complete legal assistance.",
  },
  {
    title: "Investment Consultancy",
    image: investment,
    desc: "Professional guidance to help maximize your property investment returns.",
  },
  {
    title: "Site Development",
    image: development,
    desc: "Roads, drainage, electricity, water supply, and infrastructure planning.",
  },
  {
    title: "Site Visit Assistance",
    image: visit,
    desc: "Free property visits with experienced consultants to help you choose wisely.",
  },
  {
    title: "Customer Support",
    image: support,
    desc: "Complete assistance from booking and documentation to final registration.",
  },
  {
    title: "Flexible Payment Plans",
    image: payment,
    desc: "Convenient EMI and installment options for hassle-free property purchases.",
  },
  {
    title: "Secure Transactions",
    image: secure,
    desc: "Transparent processes with trusted documentation and secure transactions.",
  },
  {
    title: "Property Appreciation",
    image: appreciation,
    desc: "Strategically selected locations with strong long-term value appreciation.",
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities">

      <div className="capabilities-heading">
        <h5>OUR EXPERTISE</h5>

        <h2>Our Property Solutions</h2>

        <p>
          We provide complete real estate solutions, offering residential,
          commercial, and investment opportunities backed by trusted legal
          support, transparent processes, and customer-focused services.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((item, index) => (
          <div className="capability-card" key={index}>

            <div className="capability-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="capability-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

      <div className="capability-bottom">
        <h2>Your Trusted Partner in Real Estate</h2>

        <p>
          From selecting the right property to legal documentation, site
          development, and investment planning, we deliver secure, transparent,
          and value-driven real estate solutions that help you build a better
          future with confidence.
        </p>
      </div>

    </section>
  );
};

export default Capabilities;