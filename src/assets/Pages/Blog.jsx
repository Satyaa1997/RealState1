import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

import blog1 from "../../assets/client1.png";
import blog2 from "../../assets/project2.jfif";
import blog3 from "../../assets/client5.jpg";
import blog4 from "../../assets/client6.jpg";
import blog5 from "../../assets/gallery1.jpg";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image: blog2,
      category: "Exhibition",
      title: "Top 10 Exhibition Stand Design Trends in 2026",
      date: "15 July 2026",
      desc: "Discover the latest exhibition stand design trends that help brands attract more visitors and create memorable experiences."
    },
    {
      id: 2,
      image: blog3,
      category: "Events",
      title: "How Professional Event Planning Makes Every Event Successful",
      date: "18 July 2026",
      desc: "From planning to execution, learn how expert event management ensures a smooth and successful event."
    },
    {
      id: 3,
      image: blog4,
      category: "Fabrication",
      title: "Why Premium Stall Fabrication Matters",
      date: "20 July 2026",
      desc: "Quality fabrication improves durability, appearance and creates a premium experience for your customers."
    },
    {
      id: 4,
      image: blog5,
      category: "Branding",
      title: "Creative Branding Ideas for Trade Shows",
      date: "22 July 2026",
      desc: "Make your exhibition booth stand out using creative branding, lighting and engaging visitor experiences."
    }
  ];

  return (
    <>
      {/* Hero */}

      <section className="blog-banner">
        <div className="blog-overlay">
          <span>OUR BLOG</span>

          <h1>Latest News & Insights</h1>

          <p>
            Stay updated with the latest trends, ideas and innovations in
            exhibitions, events and interior solutions.
          </p>
        </div>
      </section>

      {/* Featured Blog */}

      <section className="featured-blog">
        <div className="featured-image">
          <img src={blog1} alt="Featured Blog" />
        </div>

        <div className="featured-content">
          <span>FEATURED ARTICLE</span>

          <h2>
            How Exhibition Stand Design Can Boost Your Brand Visibility
          </h2>

          <p>
            A well-designed exhibition stand attracts more visitors, increases
            engagement and creates a lasting impression. Learn how modern
            exhibition design helps businesses generate more leads and build a
            stronger brand identity.
          </p>

          <button>
            Read More
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>

      {/* Latest Blogs */}

      <section className="latest-blogs">
        <div className="section-heading">
          <span>LATEST ARTICLES</span>

          <h2>Recent Blogs</h2>

          <p>
            Explore our latest articles covering exhibition stand design,
            fabrication, branding and event management.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <span>{blog.category}</span>

                <h3>{blog.title}</h3>

                <small>
                  <i className="ri-calendar-line"></i> {blog.date}
                </small>

                <p>{blog.desc}</p>

                <button>
                  Read More
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}

      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe Our Newsletter</h2>

          <p>
            Get the latest blogs, exhibition updates and industry news directly
            in your inbox.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="blog-cta">
        <h2>Ready To Build Your Next Exhibition Stand?</h2>

        <p>
          Let's create an unforgettable exhibition experience together.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </>
  );
};

export default Blog;