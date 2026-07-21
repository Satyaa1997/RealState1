import React from 'react'
import "./Urban.css";
import { useNavigate } from 'react-router-dom'
import urban1 from '../../assets/urban1.jpg'
import urban2 from '../../assets/urban2.jpg'
import urban3 from '../../assets/urban3.webp'

const Urban = () => {


    const navigate = useNavigate();

  return (
      <>

      {/* Banner */}

      <section className="urban-banner">

        <div className="urban-banner-content">

          <h1>Urban Area Plots</h1>

          <p>Invest Today in Premium Urban Properties for a Better Tomorrow</p>

        </div>

      </section>

      {/* About */}

      <section className="urban-about">

        <div className="urban-image">

          <img src={urban1} alt="Urban Plot" />

        </div>

        <div className="urban-content">

          <span>WHY INVEST IN URBAN PLOTS</span>

          <h2>Smart Living with Excellent Connectivity</h2>

          <p>
            Urban area plots offer the perfect combination of modern
            infrastructure, premium locations, and long-term investment
            opportunities. These plots are located near schools, hospitals,
            shopping malls, business centers, and transportation facilities,
            making everyday life more convenient and comfortable.
          </p>

          <p>
            With rapid city development and increasing demand for residential
            and commercial spaces, urban plots continue to appreciate in value,
            making them one of the safest and most profitable real estate
            investments.
          </p>

        </div>

      </section>

      {/* Gallery */}

      <section className="urban-gallery">

        <h2>Explore Premium Urban Locations</h2>

        <div className="urban-gallery-grid">

          <img src={urban1} alt="" />
          <img src={urban2} alt="" />
          <img src={urban3} alt="" />

        </div>

      </section>

      {/* Benefits */}

      <section className="urban-benefits">

        <h2>Benefits of Urban Area Plots</h2>

        <div className="urban-benefit-grid">

          <div className="urban-card">
            🏙️
            <h3>Prime Location</h3>
            <p>Located in fast-growing and well-developed city areas.</p>
          </div>

          <div className="urban-card">
            🚇
            <h3>Excellent Connectivity</h3>
            <p>Easy access to highways, metro stations, and public transport.</p>
          </div>

          <div className="urban-card">
            🏫
            <h3>Modern Facilities</h3>
            <p>Close to schools, hospitals, malls, and business hubs.</p>
          </div>

          <div className="urban-card">
            📈
            <h3>High Return</h3>
            <p>Excellent appreciation with increasing demand in urban areas.</p>
          </div>

        </div>

      </section>

      {/* Article */}

      <section className="urban-article">

        <div className="urban-article-left">

          <h2>Why Choose Urban Area Plots?</h2>

          <p>
            Investing in urban area plots is one of the smartest decisions for
            individuals looking for secure and profitable real estate
            investments. Urban properties are surrounded by modern amenities,
            developed infrastructure, and excellent transportation facilities,
            ensuring both convenience and long-term value.
          </p>

          <p>
            Whether you plan to build your dream home, establish a commercial
            property, or make a long-term investment, urban plots provide
            outstanding opportunities for growth and financial security. Their
            strategic locations and increasing market demand make them an ideal
            choice for investors and homebuyers alike.
          </p>

        </div>

        <div className="urban-article-right">

          <img src={urban2} alt="" />

        </div>

      </section>

      {/* Features */}

      <section className="urban-features">

        <h2>Why Customers Prefer Our Urban Plots</h2>

        <div className="urban-feature-grid">

          <div className="feature-box">
            ✅ RERA Approved Projects
          </div>

          <div className="feature-box">
            🛣️ Wide Roads & Modern Infrastructure
          </div>

          <div className="feature-box">
            🌳 Green Parks & Open Spaces
          </div>

          <div className="feature-box">
            🏥 Nearby Schools & Hospitals
          </div>

          <div className="feature-box">
            🛍️ Shopping Complex & Market
          </div>

          <div className="feature-box">
            🔒 Safe & Secure Environment
          </div>

        </div>

      </section>

      {/* CTA */}

       <section>
        <div className="contact-bottom">

        <h2>Ready to Invest in Your Future?</h2>

        <p>
          Contact Build X today and explore premium rural and urban plots with
          complete legal documentation and trusted guidance.
        </p>

        <button onClick={()=> navigate("/booknow")} >Book Site Visit</button>

      </div>

      </section>
    </>
  )
}

export default Urban
