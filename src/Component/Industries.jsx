import React from "react";
import "./industries.css";

import corporate from "../assets/project4.jfif";
import government from "../assets/govimg.jpg";
import retail from "../assets/slide1.jpg";
import hospitality from "../assets/project5.jfif";
import healthcare from "../assets/urban-banner.jpg";
import education from "../assets/education.jpg";
import museums from "../assets/meusium.jpg";
import events from "../assets/event.jpg";

const industries = [
  {
    title: "Corporate",
    image: corporate,
    desc: "Innovative exhibition stands, corporate events, product launches, and branding solutions designed to strengthen business presence.",
  },
  {
    title: "Government",
    image: government,
    desc: "Professional pavilions, public exhibitions, and official event solutions that meet government standards and regulations.",
  },
  {
    title: "Retail",
    image: retail,
    desc: "Retail displays, promotional kiosks, POP solutions, and engaging brand experiences that attract customers.",
  },
  {
    title: "Hospitality",
    image: hospitality,
    desc: "Luxury event setups, hotel branding, custom interiors, and hospitality-focused exhibition environments.",
  },
  {
    title: "Healthcare",
    image: healthcare,
    desc: "Medical exhibition booths, healthcare conferences, pharmaceutical displays, and professional presentation spaces.",
  },
  {
    title: "Education",
    image: education,
    desc: "Educational fairs, university exhibitions, training events, and interactive learning environments.",
  },
  {
    title: "Museums",
    image: museums,
    desc: "Custom museum displays, cultural exhibitions, interactive installations, and heritage presentation solutions.",
  },
  {
    title: "Events",
    image: events,
    desc: "Complete event production including stage fabrication, lighting, branding, audiovisual integration, and venue setup.",
  },
];

const Industries = () => {
  return (
    <section className="industries">

      <div className="industries-heading">

        <h5>OUR INDUSTRIES</h5>

        <h2>Industries We Serve</h2>

        <p>
          We deliver innovative exhibition, event production, and fabrication
          solutions across multiple industries, combining creativity,
          engineering, and precision to meet every client's unique requirements.
        </p>

      </div>

      <div className="industries-grid">

        {industries.map((item, index) => (

          <div className="industry-card" key={index}>

            <div className="industry-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="industry-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>

        ))}

      </div>

      <div className="industry-bottom">

        <h2>Serving Every Industry With Excellence</h2>

        <p>
          From corporate exhibitions and government pavilions to healthcare,
          retail, museums, hospitality, and large-scale events, Build X
          Production delivers world-class solutions that combine technical
          expertise with creative excellence.
        </p>

      </div>

    </section>
  );
};

export default Industries;