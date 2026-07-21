import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import About2 from "../assets/About2.png"
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.avif"
import { useNavigate } from "react-router-dom";

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

            <button onClick={()=> navigate("/about")}>Read More</button>
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
          <h2>Rural Area Plots</h2>

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
    </>
  );
};

export default Home;
