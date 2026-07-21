import React from "react";
import  { useState } from "react";
import "./Project.css";
import projet1 from "../assets/projet1.jfif";
import project2 from "../assets/project2.jfif";
import project3 from "../assets/project3.jfif";
import project4 from "../assets/project4.jfif";
import project5 from "../assets/project5.jfif";
import project6 from "../assets/project6.jfif";

const Project = () => {


    const [category, setCategory] = useState("All");
    const [year, setYear] = useState("All");
    const [location, setLocation] = useState("All");


  const projects = [
    {
    image: projet1,
    title: "Exhibition Stall",
    category: "Exhibition",
    year: "2025",
    location: "Delhi",
  },
  {
    image: project2,
    title: "Build X Projects",
    category: "Fabrication",
    year: "2026",
    location: "Mumbai",
  },
  {
    image: project3,
    title: "Product Launch",
    category: "Event",
    year: "2025",
    location: "Noida",
  },
  {
    image: project4,
    title: "Fabrication Stand",
    category: "Exhibition",
    year: "2026",
    location: "Delhi",
  },
  {
    image: project5,
    title: "Premium Stall",
    category: "Corporate",
    year: "2025",
    location: "Mumbai",
  },
  {
    image: project6,
    title: "Conference Booth",
    category: "Technical",
    year: "2026",
    location: "Noida",
  },
];

const filteredProjects = projects.filter((item) => {
  return (
    (category === "All" || item.category === category) &&
    (year === "All" || item.year === year) &&
    (location === "All" || item.location === location)
  );
});

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
          {filteredProjects.map((item, index) => (
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
           <select
             value={year}
             onChange={(e) => setYear(e.target.value)}
>
             <option value="All">All Years</option>
             <option value="2025">2025</option>
             <option value="2026">2026</option>
           </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Event">Event</option>
            <option value="Corporate">Corporate</option>
            <option value="Technical">Technical</option>
          </select>

          <select
             value={location}
             onChange={(e) => setLocation(e.target.value)}
           >
             <option value="All">All Locations</option>
             <option value="Delhi">Delhi</option>
             <option value="Mumbai">Mumbai</option>
             <option value="Noida">Noida</option>
           </select>

          <button>FILTER</button>
        </div>
      </div>
    </section>
  );
};

export default Project;
