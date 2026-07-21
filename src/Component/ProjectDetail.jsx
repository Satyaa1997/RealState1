import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";
import projet1 from "../assets/projet1.jfif";
import project2 from "../assets/project2.jfif";
import project3 from "../assets/project3.jfif";
import project4 from "../assets/project4.jfif";
import project5 from "../assets/project5.jfif";
import project6 from "../assets/project6.jfif";


const projects = [
  {
    id: 1,
    image: projet1,
    title: "Exhibition Stall",
    category: "Exhibition",
    year: "2025",
    location: "Delhi",
    client: "ABC Pvt Ltd",
    description:
      "This exhibition stall was designed with a modern concept to maximize brand visibility. We provided complete design, fabrication, branding, lighting, and technical execution.",
  },
  {
    id: 2,
    image: project2,
    title: "Build X Projects",
    category: "Fabrication",
    year: "2026",
    location: "Mumbai",
    client: "XYZ Industries",
    description:
      "Premium fabrication project with high-quality materials and elegant finishing.",
  },
  {
    id: 3,
    image: project3,
    title: "Product Launch",
    category: "Event",
    year: "2025",
    location: "Noida",
    client: "Tech World",
    description:
      "Professional product launch event with stage setup, LED walls, lighting and branding.",
  },
  {
    id: 4,
    image: project4,
    title: "Fabrication Stand",
    category: "Exhibition",
    year: "2026",
    location: "Delhi",
    client: "Global Expo",
    description:
      "Custom exhibition stand fabricated using premium materials with world-class finishing.",
  },
  {
    id: 5,
    image: project5,
    title: "Premium Stall",
    category: "Corporate",
    year: "2025",
    location: "Mumbai",
    client: "Corporate Hub",
    description:
      "Luxury corporate stall designed with modern architecture and premium interiors.",
  },
  {
    id: 6,
    image: project6,
    title: "Conference Booth",
    category: "Technical",
    year: "2026",
    location: "Noida",
    client: "Innovation Summit",
    description:
      "Complete conference booth with technical support, AV setup and branding.",
  },
];


const ProjectDetail = () => {


      const { id } = useParams();
      const navigate = useNavigate();

      const project = projects.find(
      (item) => item.id === Number(id)
      );

        if (!project) {
         return <h2 style={{ textAlign: "center" }}>Project Not Found</h2>;
        }


  return (
     <section className="project-details">

      <div className="details-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="details-content">

        <span>{project.category}</span>

        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <div className="details-info">

          <div>
            <h4>Client</h4>
            <p>{project.client}</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>{project.location}</p>
          </div>

          <div>
            <h4>Year</h4>
            <p>{project.year}</p>
          </div>

        </div>

        <button onClick={() => navigate("/project")}>
          Back To Projects
        </button>

      </div>

    </section>
  );
};
 

export default ProjectDetail
