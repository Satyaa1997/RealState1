import React, { useState } from "react";
import "./Emi.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Emi = () => {

  /* =========================
      STATES
  ========================= */

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);

  /* =========================
      EMI CALCULATION
  ========================= */

  const monthlyRate = interestRate / 12 / 100;
  const months = loanTenure * 12;

  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (
    loanAmount > 0 &&
    interestRate > 0 &&
    loanTenure > 0
  ) {
    emi =
      (loanAmount *
        monthlyRate *
        Math.pow(
          1 + monthlyRate,
          months
        )) /
      (Math.pow(
        1 + monthlyRate,
        months
      ) - 1);

    totalPayment = emi * months;
    totalInterest =
      totalPayment - loanAmount;
  }

  /* =========================
      RESET
  ========================= */

  const resetCalculator = () => {
    setLoanAmount(0);
    setInterestRate(0);
    setLoanTenure(0);
  };

  /* =========================
      PIE CHART
  ========================= */

  const pieData = {
    labels: [
      "Principal Amount",
      "Interest Amount",
    ],

    datasets: [
      {
        data:
          loanAmount === 0 &&
          totalInterest === 0
            ? [1, 0]
            : [
                loanAmount,
                totalInterest,
              ],

        backgroundColor: [
          "#2563eb",
          "#06b6d4",
        ],

        borderColor: [
          "#ffffff",
          "#ffffff",
        ],

        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <section className="emi-page">

      <div className="emi-container">

        <h1>
          🏡 EMI Calculator
        </h1>

        <p>
          Calculate your Home Loan EMI
          instantly using our smart
          calculator.
        </p>

        <div className="emi-wrapper">

          {/* =========================
                LEFT SIDE
          ========================= */}

          <div className="emi-form">

            {/* Loan Amount */}

            <div className="input-group">

              <label>
                Loan Amount (₹)
              </label>

              <input
                type="range"
                min="0"
                max="50000000"
                step="50000"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(
                    Number(e.target.value)
                  )
                }
              />

              <input
                type="number"
                placeholder="Enter Loan Amount"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(
                    Number(e.target.value)
                  )
                }
              />

            </div>

            {/* Interest */}

            <div className="input-group">

              <label>
                Interest Rate (%)
              </label>

              <input
                type="range"
                min="0"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(
                    Number(e.target.value)
                  )
                }
              />

              <input
                type="number"
                placeholder="Interest Rate"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(
                    Number(e.target.value)
                  )
                }
              />

            </div>

            {/* Loan Tenure */}

            <div className="input-group">

              <label>
                Loan Tenure (Years)
              </label>

              <input
                type="range"
                min="0"
                max="30"
                value={loanTenure}
                onChange={(e) =>
                  setLoanTenure(
                    Number(e.target.value)
                  )
                }
              />

              <input
                type="number"
                placeholder="Loan Tenure"
                value={loanTenure}
                onChange={(e) =>
                  setLoanTenure(
                    Number(e.target.value)
                  )
                }
              />

            </div>

            <button
              className="reset-btn"
              onClick={resetCalculator}
            >
              Reset Calculator
            </button>

          </div>

          {/* =========================
              RIGHT SIDE
              (Part 2)
          ========================= */}
                    <div className="emi-result">

            <div className="result-section">

              {/* Monthly EMI */}

              <div className="result-card">

                <h3>Monthly EMI</h3>

                <h2>
                  ₹{" "}
                  {emi.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </h2>

              </div>

              {/* Total Interest */}

              <div className="result-card">

                <h3>Total Interest</h3>

                <h2>
                  ₹{" "}
                  {totalInterest.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </h2>

              </div>

              {/* Total Payment */}

              <div className="result-card">

                <h3>Total Payment</h3>

                <h2>
                  ₹{" "}
                  {totalPayment.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </h2>

              </div>

              {/* Loan Summary */}

              <div className="summary">

                <h3>Loan Summary</h3>

                <div className="summary-row">

                  <span>Principal Amount</span>

                  <strong>
                    ₹{" "}
                    {loanAmount.toLocaleString("en-IN")}
                  </strong>

                </div>

                <div className="summary-row">

                  <span>Interest Rate</span>

                  <strong>
                    {interestRate}%
                  </strong>

                </div>

                <div className="summary-row">

                  <span>Loan Tenure</span>

                  <strong>
                    {loanTenure} Years
                  </strong>

                </div>

                <div className="summary-row">

                  <span>Monthly EMI</span>

                  <strong>
                    ₹{" "}
                    {emi.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </strong>

                </div>

              </div>

            </div>

            {/* =====================
                  PIE CHART
            ===================== */}

            <div className="chart-card">

              <h3>
                Loan Distribution
              </h3>

              <div className="chart-wrapper">

                <Pie
                  data={pieData}
                  options={pieOptions}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Emi;