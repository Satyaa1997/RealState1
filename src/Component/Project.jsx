import React from "react";

import projet1 from "../assets/projet1.jfif";
import project2 from "../assets/project2.jfif";
import project3 from "../assets/project3.jfif";
import project4 from "../assets/project4.jfif";
import project5 from "../assets/project5.jfif";
import project6 from "../assets/project6.jfif";

const Project = () => {
  const projects = [
    {
      image: projet1,
      title: "Exhibition Stall",
      category: "Exhibition",
    },
    {
      image: project2,
      title: "Build X Projects",
      category: "Fabrication",
    },
    {
      image: project3,
      title: "Product Launch",
      category: "Event",
    },
    {
      image: project4,
      title: "Fabrication Stand",
      category: "Exhibition",
    },
    {
      image: project5,
      title: "Premium Stall",
      category: "Corporate",
    },
    {
      image: project6,
      title: "Conference Booth",
      category: "Technical",
    },
  ];

  return (
    <section className="project-section">
      <div className="project-top">
        <div>
          <h2>FEATURED PROJECTS</h2>

          <p>Explore our latest exhibition & event projects.</p>
        </div>

        <div className="project-count">6 Projects</div>
      </div>

      <div className="project-wrapper">
        {/* Left */}

        <div className="project-grid">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={item.image} alt="" />
              </div>

              <div className="project-content">
                <h3>{item.title}</h3>

                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}

        <div className="filter-box">
          <h3>Filter</h3>

          <select>
            <option>Year</option>

            <option>2025</option>

            <option>2026</option>
          </select>

          <select>
            <option>Category</option>

            <option>Exhibition</option>

            <option>Fabrication</option>

            <option>Event</option>

            <option>Technical</option>
          </select>

          <select>
            <option>Location</option>

            <option>Delhi</option>

            <option>Mumbai</option>

            <option>Noida</option>
          </select>

          <button>FILTER</button>
        </div>
      </div>
    </section>
  );
};

export default Project;
