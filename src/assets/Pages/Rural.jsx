import React from 'react'
import "./Rural.css";
import { useNavigate } from 'react-router-dom'
import rural1 from '../../assets/rural1.jpg'
import rural2 from '../../assets/rural2.avif'
import rural3 from '../../assets/rural3.jfif'

const Rural = () => {

 const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}

      <section className="rural-banner">
        <div className="banner-content">
          <h1>Rural Area Plots</h1>
          <p>Secure Your Future with Affordable Rural Land Investments</p>
        </div>
      </section>

      {/* About */}

      <section className="rural-about">

        <div className="rural-img">
          <img src={rural1} alt="" />
        </div>

        <div className="rural-text">

          <span>WHY CHOOSE RURAL PLOTS</span>

          <h2>Affordable Investment with High Future Value</h2>

          <p>
            Rural area plots provide an excellent opportunity for individuals
            seeking affordable land with long-term appreciation. These plots
            are surrounded by natural beauty, fresh air, and peaceful
            environments, making them ideal for residential, agricultural,
            farmhouse, or future commercial developments.
          </p>

          <p>
            As infrastructure continues to expand into rural regions,
            property values steadily increase, making rural land one of the
            smartest investments for the future.
          </p>

        </div>

      </section>

      {/* Gallery */}

      <section className="rural-gallery">

        <h2>Beautiful Rural Locations</h2>

        <div className="gallery">

          <img src={rural1} alt="" />
          <img src={rural2} alt="" />
          <img src={rural3} alt="" />

        </div>

      </section>

      {/* Benefits */}

      <section className="benefits">

        <h2>Benefits of Rural Area Plots</h2>

        <div className="benefit-grid">

          <div className="benefit-card">
            🌿
            <h3>Peaceful Environment</h3>
            <p>Fresh air, greenery, and pollution-free surroundings.</p>
          </div>

          <div className="benefit-card">
            💰
            <h3>Affordable Prices</h3>
            <p>Lower investment compared to city properties.</p>
          </div>

          <div className="benefit-card">
            📈
            <h3>Future Appreciation</h3>
            <p>Excellent long-term investment opportunities.</p>
          </div>

          <div className="benefit-card">
            🚜
            <h3>Multiple Uses</h3>
            <p>Suitable for farming, farmhouse, or residential use.</p>
          </div>

        </div>

      </section>

      {/* Article */}

      <section className="article">

        <div className="article-left">

          <h2>Why Invest in Rural Area Plots?</h2>

          <p>
            Investing in rural plots is becoming increasingly popular due to
            their affordability and strong future growth potential. As cities
            expand and infrastructure improves, rural land gains significant
            value over time. These plots are perfect for those who want a
            peaceful lifestyle away from city congestion while also making a
            secure financial investment.
          </p>

          <p>
            Rural properties are suitable for building dream homes,
            farmhouses, agricultural projects, eco-tourism businesses, and
            retirement homes. Their lower purchase cost and increasing demand
            make them one of the best real estate investment options today.
          </p>

        </div>

        <div className="article-right">
          <img src={rural2} alt="" />
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

export default Rural
