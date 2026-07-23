import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logopng.png";

const Footer = () => {



  return (
    <footer className="footer">

      {/* Top Footer */}

      <div className="footer-top">

        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="footer-contact-box">
          <h3>Corporate Office</h3>
          <p>
            Build X Real Estate Pvt. Ltd.
            <br />
            Sector 62, Noida,
            <br />
            Uttar Pradesh - 201301
          </p>
        </div>

        <div className="footer-contact-box">
          <h3>Contact</h3>
          <p>+91 98765 43210</p>
          <p>+91 91234 56789</p>
        </div>

        <div className="footer-contact-box">
          <h3>Email</h3>
          <p>info@buildx.com</p>
          <p>support@buildx.com</p>
        </div>

      </div>

      <hr />

      {/* Bottom */}

      <div className="footer-links">

        <div className="footer-column">

      <h4>About Us</h4>

         <Link to="/">Our Company</Link>

         <Link to="/about">Mission & Vision</Link>

         <Link to="/about">Our Team</Link>

         <Link to="/testimonial">Testimonials</Link>

         <Link to="/blog">Blogs</Link>

    </div>


        <div className="footer-column">

          <h4>Services</h4>

           <Link to="/property-buying">Property Buying</Link>

           <Link to="/property-selling">Property Selling</Link>

           <Link to="/loan">Home Loan</Link>

           <Link to="/legal-support">Legal Support</Link>

           <Link to="/booknow">Site Visit</Link>

        </div>

        <div className="footer-column">

          <h4>Quick Links</h4>

           <Link to="/">Home</Link>

           <Link to="/about">About</Link>

           <Link to="/project">Projects</Link>

           <Link to="/contact">Contact</Link>

           <Link to="/contact">Carrer</Link>

           <Link to="/faq">FAQ</Link>

        </div>

        <div className="footer-column">

          <h4>Legal</h4>

              <Link to="/privacy-policy">Privacy Policy</Link>

              <Link to="/terms-conditions">Terms & Conditions</Link>

              <Link to="/disclaimer">Disclaimer</Link>

              <Link to="/refund-policy">Refund Policy</Link>

        </div>

        <div className="footer-column">

          <h4>Resources</h4>

              <Link to="/emi">EMI Calculator</Link>

               <Link to="/loan">Home Loan</Link> 

              <Link to="/property-guide">Property Guide</Link>

              <Link to="/blog">Latest News</Link>

        </div>

      </div>

      {/* Social */}

      <div className="footer-social">

        <a href="#">
          <i className="ri-facebook-fill"></i>
        </a>

        <a href="#">
          <i className="ri-instagram-line"></i>
        </a>

        <a href="#">
          <i className="ri-linkedin-fill"></i>
        </a>

        <a href="#">
          <i className="ri-youtube-fill"></i>
        </a>

      </div>

      <div className="footer-copy">
        © 2026 Build X Real Estate. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;