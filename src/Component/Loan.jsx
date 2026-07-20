import React from "react";

import hdfc from "../assets/hdfc.jfif";
import sbi from "../assets/sbi.jfif";
import bob from "../assets/bajaj.jfif";
import canara from "../assets/canara.jfif";

const Loan = () => {

  const banks = [
    {
      logo: hdfc,
      name: "HDFC Bank",
      rate: "7.25%"
    },
    {
      logo: sbi,
      name: "State Bank of India",
      rate: "7.15%"
    },
    {
      logo: bob,
      name: "Bank of Baroda",
      rate: "7.40%"
    },
    {
      logo: canara,
      name: "Canara Bank",
      rate: "7.20%"
    }
  ];

  return (

    <div className="loan-page">

      {/* Hero */}

      <section className="loan-banner">

        <div className="loan-overlay">

          <span>HOME LOAN</span>

          <h1>
            Compare Home Loan Offers
            From India's Top Banks
          </h1>

          <p>
            Get attractive interest rates, fast approvals and hassle-free
            documentation for your dream property.
          </p>

          <div className="loan-btns">

            <button>Check Eligibility</button>

            <button className="outline-btn">
              Explore Offers
            </button>

          </div>

        </div>

      </section>

      {/* Loan Partners */}

      <section className="partner-section">

        <h2>Our Banking Partners</h2>

        <p>
          Compare interest rates from India's trusted banks.
        </p>

        <div className="partner-slider">

          <div className="partner-track">

            {[...banks, ...banks].map((bank, index) => (

              <div className="partner-card" key={index}>

                <img src={bank.logo} alt={bank.name} />

                <h4>{bank.name}</h4>

                <span>Starts At</span>

                <h3>{bank.rate}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="benefits">

        <h2>Why Choose Us</h2>

        <div className="benefit-grid">

          <div className="benefit-card">

            <i className="ri-bank-fill"></i>

            <h3>40+ Banking Partners</h3>

            <p>
              Compare multiple banks to get the best interest rate.
            </p>

          </div>

          <div className="benefit-card">

            <i className="ri-percent-fill"></i>

            <h3>Lowest Interest</h3>

            <p>
              Attractive interest rates starting from 7.15%.
            </p>

          </div>

          <div className="benefit-card">

            <i className="ri-file-list-3-fill"></i>

            <h3>Easy Documentation</h3>

            <p>
              Minimal paperwork with quick processing.
            </p>

          </div>

          <div className="benefit-card">

            <i className="ri-shield-check-fill"></i>

            <h3>100% Secure</h3>

            <p>
              Transparent loan approval process with trusted banks.
            </p>

          </div>

        </div>

      </section>

      {/* Process */}

      <section className="loan-process">

        <h2>How It Works</h2>

        <div className="process-grid">

          <div className="process-card">

            <span>01</span>

            <h3>Apply Online</h3>

            <p>
              Fill out the application form with your details.
            </p>

          </div>

          <div className="process-card">

            <span>02</span>

            <h3>Compare Offers</h3>

            <p>
              Compare interest rates from multiple banks.
            </p>

          </div>

          <div className="process-card">

            <span>03</span>

            <h3>Document Verification</h3>

            <p>
              Upload documents for quick verification.
            </p>

          </div>

          <div className="process-card">

            <span>04</span>

            <h3>Loan Approval</h3>

            <p>
              Receive approval and get your loan disbursed.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="loan-cta">

        <h2>
          Ready To Apply For Your Dream Home Loan?
        </h2>

        <p>
          Contact our loan experts today and get the best deal.
        </p>

        <button>Apply Now</button>

      </section>

    </div>

  );
};

export default Loan;