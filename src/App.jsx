import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Testimonial from "./Component/Testimonial";
import { Routes, Route } from "react-router-dom";
import Rural from "./assets/Pages/Rural";
import Urban from "./assets/Pages/Urban";
import BookNow from "./assets/Pages/BookNow";
import Footer from "./Component/Footer";
import ScrollTop from "./Component/ScrollTop";
import Loan from "./Component/Loan";
import ProjectDetail from "./Component/ProjectDetail";
import Emi from "./assets/Pages/Emi";
import Blog from "./assets/Pages/Blog";
import CorporatePage1 from "./Component/CorporatePage1";
import ExhibitionStands from "./assets/Pages/ExhibitionStands"
import FabricationWork from "./assets/Pages/FabricationWork";
import StylefoamArts from "./assets/Pages/StylefoamArts";
import TechnicalServices from "./assets/Pages/TechnicalServices";

const App = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/rural" element={<Rural />} />

        <Route path="/urban" element={<Urban />} />

        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />

        <Route path="/project" element={<Project />} />

        <Route path="/testimonial" element={<Testimonial />} />

        <Route path="/booknow" element={<BookNow />} />

        <Route path="/project/:id" element={<ProjectDetail />} />

        <Route path="/loan" element={<Loan />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/corporatepage1" element={<CorporatePage1 />} />

        <Route path="/emi" element={<Emi />} />
        
        <Route path="/services/exhibition" element={<ExhibitionStands />} />

        <Route path="/services/fabrication" element={<FabricationWork />} />

        <Route path="/services/stylefoam" element={<StylefoamArts />} />

        <Route path="/services/technical" element={<TechnicalServices />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
